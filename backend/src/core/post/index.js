const { Post } = require('../../models')

const getPosts = async () => {
  return await Post.findAll()
}

const getPost = async (id) => {
  return await Post.findOne({
    where: { id }
  })
}

const getUserPostsByUserId = async (userid) => {
  const post = await Post.findAll({
    where: { userid }
  })
  // 만약 포스트가 없으면 null 을 리턴한다
  if(post.length === 0) {
    return null
  }
  return post
}

module.exports = { getPosts, getPost, getUserPostsByUserId }