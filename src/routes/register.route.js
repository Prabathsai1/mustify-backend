const express = require('express')
const register = require('../controller/register.controller.js')
const route = express.Router()
route.post('/', register)

module.exports = route