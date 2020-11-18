const express = require("express");
const router = express.Router();

const { getPosts, getPost, createAndUpdatePost } = require('../core/post')

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
  const post = await createAndUpdatePost(req.body)
  res.send(post)
})

module.exports = router;