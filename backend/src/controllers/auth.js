const express = require("express");
const router = express.Router();

const { 
  getUserByEmailWithNoPrivateInfo,
  loginUser, 
  registerUser 
} = require('../core/user');

const { verifyJWT, generateJWT } = require("../utils/jwt");

/**
 * 로그인 여부 확인용 me 쿼리
 */
router.post("/me", async (req, res) => {
  const authToken = req.cookies["record_auth"]

  if (!authToken) {
    return res.sendStatus(401)
  }

  const { email } = await verifyJWT(authToken);
  const user = await getUserByEmailWithNoPrivateInfo(email)
  
  if (user) {
    return res.send(user)
  }
  res.sendStatus(401)
})

/**
 * 로그인 하는 메소드
 */
router.post("/login", async (req, res) => {
  const { email, password } = req.body 
  const user = await loginUser(email, password)

  if (user) {
    const jwt = await generateJWT(user)
    return res.cookie("record_auth", jwt, {
      sameSite: "none", 
      secure: true, 
    }).send(user)
  }

  res.sendStatus(401)
})

/**
 * 로그아웃 및 쿠키 삭제함
 */
router.post("/logout", async (req, res) => {
  res.clearCookie("record_auth").send()
})

/**
 * 회원가입
 */
router.post("/register", async (req, res) => {
  const { email, password, name } = req.body

  try {
    const user = await registerUser(email, password, name)
    res.send(user)
  } catch(err) {
    res.sendStatus(400)
  }
})

module.exports = router;