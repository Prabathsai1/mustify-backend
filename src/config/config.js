const env=require('dotenv')
env.config()
if(!process.env.dbString){
throw new error("db string is missing in the dotenv")
}
if(!process.env.accessToken){
throw new error("accessToken is missing in the dotenv")
}
if(!process.env.refreshToken){
throw new error("refreshToken is missing in the dotenv")
}
if(!process.env.sessionToken){
throw new error("sessionToken is missing in the dotenv")
}
if(!process.env.sessiondb){
throw new error("sessiondb is missing in the dotenv")
}
if(!process.env.ImageKit){
throw new error("imagekit privatekey is missing in the dotenv")
}
const secret={db:process.env.dbString,
              accessToken:process.env.accessToken,
              refreshToken:process.env.refreshToken,
              sessionToken:process.env.sessionToken,
              sessionDB:process.env.sessiondb,
              privateKey:process.env.ImageKit
            }

module.exports=secret