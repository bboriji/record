const express = require('express')
const router = express.Router()

const { getUserWithNoPrivateInfo, editUserProfile } = require('../core/user')
const { getUserPostsByUserName } = require('../core/post')

const { verifyJWT } = require('../utils/jwt')

router.get('/user/:id', async (req, res) => {
  const id = req.params['id']
  const user = await getUserWithNoPrivateInfo(id)
  res.send(user)
})

router.get('/user/:id/posts', async (req, res) => {
  const id = req.params['id']
  const user = await getUserPostsByUserName(id)
  res.send(user)
})

router.post('/user/edit', async (req, res) => {
  try {
    const authToken = req.cookies['record_auth']
    console.log(authToken)
    if (!authToken) {
      return res.sendStatus(401)
    }

    const data = await verifyJWT(authToken)
    const { id } = data
    const { profile, githubLink, name } = req.body
    const user = await editUserProfile({
      id,
      profile,
      githubLink,
      name,
    })

    res.send(user)
  } catch (err) {
    res.sendStatus(400)
  }
})

module.exports = router
