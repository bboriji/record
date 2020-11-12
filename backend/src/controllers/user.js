const express = require("express");
const router = express.Router();

const { 
  getUserWithNoPrivateInfo, 
  loginUser, 
  registerUser 
} = require('../core/user')

router.get("/user/:id", async (req, res) => {
  const id = req.params['id']
  const user = await getUserWithNoPrivateInfo(id)
  res.send(user)
});

router.post("/login", async (req, res) => {
  const {email, password} = req.body 
})

router.post("/logout", async (req, res) => {

})

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