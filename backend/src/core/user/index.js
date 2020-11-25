const { User } = require('../../models')
const bcrypt = require('bcrypt')

const getUserWithNoPrivateInfo = async (name) => {
  const user = await User.findOne({
    where: { name },
    attributes: { exclude: ['passwd'] },
  })

  return user
}

const getUserByEmailWithNoPrivateInfo = async (email) => {
  const user = await User.findOne({
    where: { email },
    attributes: { exclude: ['passwd'] },
  })

  return user
}

/**
 * 로그인 함수, 성공시 유저 인스턴스, 실패시 null 리턴
 * @param {string} email
 * @param {string} password
 */
const loginUser = async (email, password) => {
  const existUser = await User.findOne({
    where: { email },
  })

  if (!existUser) {
    return null
  }

  const result = await bcrypt.compare(password, existUser.passwd)

  // 로그인 성공시, User 인스턴스 넘겨줌
  if (result) {
    const { passwd, ...others } = existUser.dataValues
    return others
  }

  // 로그인 실패시 null 리턴
  return null
}

/**
 * 회원가입
 * @param {string} email
 * @param {string} password
 * @param {string} name
 */
const registerUser = async (email, password, name) => {
  const existUser = await User.findOne({
    where: { email },
  })

  if (existUser) throw new Error('이미 유저가 존재합니다.')

  // 생성된 유저 인스턴스를 넘겨줌, password 는 해싱을 해서 줌
  const passwd = await bcrypt.hash(password, 10)
  const createdUser = await User.create({
    email,
    passwd,
    name,
  })
  const { passwd: _passwd, ...others } = createdUser.dataValues
  return others
}

const editUserProfile = async ({id, profile, githubLink, name}) => {
  const existUser = await User.findOne({
    where: { id },
  })
  if (!existUser) throw new Error('유저가 존재하지 않습니다.')

  user = await User.update(
    {
      profile,
      githubLink,
      name,
    },
    { where: { id } },
  )

  return user
}

module.exports = {
  getUserWithNoPrivateInfo,
  getUserByEmailWithNoPrivateInfo,
  editUserProfile,
  loginUser,
  registerUser,
}
