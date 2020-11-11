const express = require("express");
const router = express.Router();

const { getUserWithNoPrivateInfo } = require('../core/user')

router.get("/user/:id", async (req, res) => {
  const id = req.params['id']
  const user = await getUserWithNoPrivateInfo(id)
  res.send(user)
});

module.exports = router;