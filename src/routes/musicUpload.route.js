const express = require('express')
const uploadMusic = require('../controller/music.controller.js')
const multer=require("multer")
const route = express.Router()

const upload=multer({storage:multer.memoryStorage()})

route.post('/',upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'music', maxCount: 1 }]),uploadMusic)

module.exports = route