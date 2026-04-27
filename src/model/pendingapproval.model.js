const mongoose = require('mongoose')
const schema = mongoose.Schema({
    MusicName: { type: String, required: true },
    Music: [{ type: String, required: true }],
    Artist: {type:mongoose.Schema.Types.ObjectId,ref:"user"},
    Status: { type: String, enum: ["pending", "approved"], default: "pending" }
})
const model = mongoose.model("pending_approval", schema)

module.exports=model