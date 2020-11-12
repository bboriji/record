import * as JWT from 'jsonwebtoken'
import fs from 'fs'
import path from 'path'

// Initialize jwt private / public keys
// 만약 파일이 빈 값이면 Container 종료하기
const jwtPublicKey = fs
  .readFileSync(path.join(process.cwd(), 'src/etc/jwt/public.key'))
  .toString()
const jwtPrivateKey = fs
  .readFileSync(path.join(process.cwd(), 'src/etc/jwt/private.key'))
  .toString()

export const generateJWT = (
  values,
  expiresIn = '365d',
) =>
  new Promise((resolve, reject) => {
    JWT.sign(
      values,
      jwtPrivateKey,
      {
        algorithm: 'RS256',
        expiresIn,
      },
      (err, token) => {
        if (err) reject(err)
        resolve(token)
      },
    )
  })

export const verifyJWT = (token) =>
  new Promise((resolve, reject) => {
    JWT.verify(token, jwtPublicKey, (err, decoded) => {
      if (err) reject(err)
      resolve(decoded)
    })
  })
