const { config } = require("dotenv");
config();

// 포트 번호 정의
const port = 13000
const app = require("../src/app");

app.listen(port, () => {
  console.log(`listen start ${port}`);
});
