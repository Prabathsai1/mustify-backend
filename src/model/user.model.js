const mongoose = require('mongoose')

const schema = mongoose.Schema({

    UserName: { type: String, required: true, unique: true },
    Email: { type: String, required: true },
    Password: { type: String, required: true },
    Role: { type: String, enum:["user", "artist"] }


})

const model=mongoose.model("user",schema)

module.exports=model