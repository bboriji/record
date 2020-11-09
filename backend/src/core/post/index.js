const { Post } = require('../../models')

const getPosts = async () => {
  return await Post.findAll()
}

const getPost = async (id) => {
  const post = await Post.findAll({
    where: { id }
  })
  // 만약 포스트가 없으면 null 을 리턴한다
  if(post.length === 0) {
    return null
  }
  return post[0]
}

const getUserPosts = async (postId, userId) => {
  const post = await Post.findAll({
    where: { id: postId, userId }
  })
  // 만약 포스트가 없으면 null 을 리턴한다
  if(post.length === 0) {
    return null
  }
  return post[0]
}

module.exports = { getPosts, getPost }