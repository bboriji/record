const path = require("path");
const fetch = require("node-fetch");
const uuid = require("uuid/v4");

const AWS = require("aws-sdk");
const s3 = new AWS.S3();
const {
  CF_BASE_URL,
  IMG_RESIZER_BUCKET,
  IMG_RESIZER_URL,
  X_API_KEY,
} = process.env;

module.exports = async ({ name, width, height, payloadStream }) => {
  const fileExt = path.extname(name);
  if (
    fileExt !== ".jpg" &&
    fileExt !== ".jpeg" &&
    fileExt !== ".png" &&
    fileExt !== ".JPG"
  ) {
    throw new Error({
      code: "ERR_EXT_NOT_SUPPORT",
      message: `${fileExt} not support`,
    });
  }

  const now = new Date();
  const objKey = `recrute/${now.getUTCFullYear()}-${now.getUTCMonth() + 1}-${
    now.getUTCDate() + 1
  }/${uuid()}${fileExt}`;

  try {
    await uploadS3(objKey, payloadStream);

    if (width !== undefined && height !== undefined) {
      const resizeResult = await resizeImage(objKey, width, height);
      return `https://${CF_BASE_URL}/${resizeResult}`;
    }
    return `https://${CF_BASE_URL}/${objKey}`;
  } catch (err) {
    throw err;
  }
};

const resizeImage = async (key, width, height) => {
  const url = `${IMG_RESIZER_URL}?`;
  const params = new URLSearchParams({
    bucket: IMG_RESIZER_BUCKET,
    key,
    width,
    height,
  });
  const headers = {
    "Content-Type": "application/json",
    "x-api-key": X_API_KEY,
  };
  const response = await fetch(url + params, { method: "POST", headers });
  const resBody = await response.json();
  if (response.status !== 200) {
    throw new Error({
      code: "ERR_RESIZER_ERROR",
      message: resBody.message,
    });
  }
  return `${resBody["Key"]}`;
};

const uploadS3 = (Key, stream) =>
  new Promise((resolve, reject) => {
    s3.upload(
      {
        Bucket: IMG_RESIZER_BUCKET,
        Key,
        Body: stream,
      },
      (err) => {
        if (err) {
          return reject(err);
        }
        return resolve();
      }
    );
  });
