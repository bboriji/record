const { User } = require('../../models')

const getUserWithNoPrivateInfo = async (id) => {
  const user = await User.findAll({
    where: { id }
  })

  const {
    passwd,
    ...others
  } = user[0].dataValues

  return others
}

module.exports = { getUserWithNoPrivateInfo }