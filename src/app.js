const express = require('express')
const register = require('./routers/auth.routes/register.route.js')
const login = require('./routers/auth.routes/login.route.js')
const logoutUser = require('./routers/auth.routes/logout.route.js')
const resetpassword = require('./routers/auth.routes/resetpassword.route.js')
const WaitingAdminApproval= require('./routers/music.routes/musicUpload.route.js')
const allMusic = require('./routers/music.routes/getMusic.route.js')
const cookie = require('cookie-parser')
const session = require('express-session')
const mongo = require('connect-mongo')
const env = require('./config/config.js')
const UserVerification = require('./middleware/accessToken.js')
const roleVerification = require('./middleware/roleVerification.js')
const getsession=require('./routers/session.routes/getSession.route.js')
const getCurrentUser = require('./routers/session.routes/getCurrentUser.route.js')
const adminapproving = require("./routers/music.routes/adminApproval.route.js")
const adminVerification = require("./middleware/adminVerification.js")
const WaitingApprovalData=require("./routers/music.routes/adminData.route.js")
const cors=require("cors")
const app = express()

app.use(cors({
 origin: 'https://mustify-frontend.onrender.com',
 credentials: true
}))
app.use(cookie())
app.use((session({
    name: "user",
    resave: false,
    saveUninitialized: false,
    secret: env.sessionToken,
     cookie: { maxAge: 60 * 60 * 1000, httpOnly: true,sameSite: "none",   // 🔥 REQUIRED
    secure: true  },
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
app.use('/spotify/home/musicupload', roleVerification, WaitingAdminApproval)
app.use('/spotify/home/music',allMusic)
app.use('/spotify/home/music/logout', logoutUser)
app.use('/spotify/home/music/admin',adminVerification, adminapproving)
app.use("/admin/data",WaitingApprovalData)
module.exports = app
