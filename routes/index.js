const router = require('express').Router()
const controllers = require('../controllers')

router.get('/', controllers.index)

module.exports = {
    router
}