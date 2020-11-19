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
  try {
    const authToken = req.cookies["record_auth"]
    console.log(authToken)
    if (!authToken) {
      return res.sendStatus(401)
    }
    
    const data = await verifyJWT(authToken);

    const { id } = data
    const { postid, title, contents } = req.body
    const post = await createAndUpdatePost({ 
      postid,
      title,
      contents,
      userid: id
    })

    res.send(post)
  } catch(err) {
    res.sendStatus(500)
  }
})

module.exports = router;