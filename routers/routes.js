const express = require('express')
const passport = require('passport')
const { OK } = require('http-status-codes')

const wrap = require('../wrap.js')
const { routers } = require('../constants')
const auth = require('../auth/validateToken')
const { apiController, usersController } = require('../controllers')

const router = express.Router()

router.get(routers.CALLBACK, passport.authenticate('google', { scope: ['email', 'profile'] }), wrap(apiController.callback))

router.get(routers.GOOGLE, passport.authenticate('google', { scope: ['email', 'profile'] }), (req, res) => { });

router.get(routers.USERS, wrap(usersController.listUsers))

router.post(routers.USERS, wrap(usersController.addUsers))

router.put(routers.USERS, wrap(usersController.updateUsers))

router.delete(routers.USERS, wrap(usersController.deleteUsers))


router.get(routers.HEALTH, wrap(async (req, res) => {
    res.status(OK).json({ message: 'OK' })
  }))


module.exports = router