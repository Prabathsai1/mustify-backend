const express=require('express')
const getCurrentUser=require('../../controller/session/getCurrentUser.controller.js')
const route=express.Router()

route.post('/',getCurrentUser)

module.exports=route