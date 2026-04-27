const mongoose = require('mongoose')
const schema = mongoose.Schema({
    MusicName: { type: String, required: true }
    , Music: [{ type: String, required: true }]
    , Artist: { type: mongoose.Schema.Types.ObjectId, ref: "user" }
})
const model = mongoose.model("music", schema)

module.exports = model