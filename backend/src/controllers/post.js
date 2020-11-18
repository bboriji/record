const express = require("express");
const router = express.Router();

const { getPosts, getPost, createAndUpdatePost } = require('../core/post')
const { verifyJWT } = require("../utils/jwt");

router.get("/posts", async (req, res) => {
  const posts = await getPosts()
  res.send(posts)
});

router.get("/post/:id", async (req, res) => {
  const postId = req.params['id']
  const post = await getPost(postId)
  res.send(post)
})

router.post("/post/write", async (req, res) => {
  const authToken = req.cookies["record_auth"]

  if (!authToken) {
    return res.sendStatus(401)
  }
  
  const { id } = await verifyJWT(authToken);
  const { postid, title, contents } = req.body
  const post = await createAndUpdatePost({ 
    postid,
    title,
    contents,
    userid: id
  })

  res.send(post)
})

module.exports = router;