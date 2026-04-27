const express = require('express')
const login = require('../../controller/auth/login.controller.js')
const route = express.Router()
route.post('/',login)

module.exports=route