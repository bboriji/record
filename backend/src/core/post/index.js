const { Post, User } = require('../../models')

const getPosts = async () => {
  return await Post.findAll({
    include: [{ model: User, attributes: { exclude: ['passwd'] } }],
    order: [['updatedAt', 'DESC']],
  })
}

const getPost = async (id) => {
  return await Post.findOne({
    where: { id },
    include: [{ model: User, attributes: { exclude: ['passwd'] } }],
  })
}

const getUserPostsByUserId = async (userid) => {
  const post = await Post.findAll({
    where: { userid },
    include: [{ model: User, attributes: { exclude: ['passwd'] } }],
    order: [['updatedAt', 'DESC']],
  })
  // 만약 포스트가 없으면 null 을 리턴한다
  if (post.length === 0) {
    return null
  }
  return post
}

const createAndUpdatePost = async (postDTO) => {
  const { postid, title, contents, userid } = postDTO

  let post = null

  if (postid !== undefined) {
    post = await Post.update(
      { title, contents },
      {
        where: {
          id: postid,
        },
      },
    )
  } else {
    post = await Post.create({ title, contents, userid })
  }

  return post
}

const deletePost = async (postId, userId) => {
  const foundPost = await Post.findOne({
    where: { id: postId, userId },
  })
  if (!foundPost) {
    throw new Error('post not exist')
  }

  await Post.destroy({
    where: { id: postId },
  })

  return
}

module.exports = {
  getPosts,
  getPost,
  deletePost,
  getUserPostsByUserId,
  createAndUpdatePost,
}
