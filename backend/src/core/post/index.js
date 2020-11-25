const { Post, User } = require('../../models')

const getPosts = async () => {
  return await Post.findAll()
}

const getPost = async (id) => {
  return await Post.findOne({
    where: { id },
    include: [{ as: 'user', model: User,  exclude: ['passwd']  }],
  })
}

const getUserPostsByUserId = async (userid) => {
  const post = await Post.findAll({
    where: { userid },
    include: [{ as: 'user', model: User,  exclude: ['passwd']  }],
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

module.exports = {
  getPosts,
  getPost,
  getUserPostsByUserId,
  createAndUpdatePost,
}
