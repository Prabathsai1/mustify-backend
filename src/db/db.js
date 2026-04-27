const mongoose = require('mongoose')
const env = require('../config/config.js')
async function connect() {

    try {

        await mongoose.connect(env.db)
        console.log("server successfully connected to database")
 
   }

    catch (error) {

        console.log(error.message)
 
   }
}
module.exports = connect