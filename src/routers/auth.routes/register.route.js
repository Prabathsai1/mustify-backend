const express = require('express')
const register = require('../../controller/auth/register.controller')
const route = express.Router()
route.post('/', register)

module.exports = route