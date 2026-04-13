const express = require('express')
const register = require('./routes/register.route.js')
const login = require('./routes/login.route.js')
const logoutUser = require('./routes/logout.route.js')
const resetpassword = require('./routes/resetpassword.route.js')
const musicupload = require('./routes/musicUpload.route.js')
const allMusic = require('./routes/getMusic.route.js')
const cookie = require('cookie-parser')
const session = require('express-session')
const mongo = require('connect-mongo')
const env = require('./config/config.js')
const UserVerification = require('./middleware/accessToken.js')
const roleVerification = require('./middleware/roleVerification.js')
const getsession=require('./routes/getSession.route.js')
const getCurrentUser=require('./routes/getCurrentUser.route.js')
const cors=require("cors")
const app = express()

app.use(cors({
 origin: 'http://localhost:5173',
 credentials: true
}))
app.use(cookie())
app.use((session({
    name: "user",
    resave: false,
    saveUninitialized: false,
    secret: env.sessionToken,
     cookie: { maxAge: 60 * 60 * 1000, httpOnly: true, sameSite: "strict" },
    store: mongo.MongoStore.create({ mongoUrl: env.sessionDB, collectionName: "sessions" })

})))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/spotify/register', register)
app.use('/spotify/login', login)
app.use('/spotify/resetpassword', resetpassword)
app.use(UserVerification)
app.use('/session',getsession)
app.use('/getuser',getCurrentUser)
app.use('/spotify/home/musicupload', roleVerification, musicupload)
app.use('/spotify/home/music',allMusic)
app.use('/spotify/home/music/logout',logoutUser)
module.exports = app