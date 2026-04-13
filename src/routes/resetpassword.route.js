const express = require('express')
const resetPassword = require('../controller/resetPassword.controller.js')
const route = express.Router()
route.post('/', resetPassword)

module.exports = route