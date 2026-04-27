const Model = require("../../model/pendingapproval.model.js")
const musicservice = require('../../services/imagekit.js')
async function pending_Approval(req, res) {
    if (!req.files || !req.body.musicName) { 
        return res.status(400).json({ success: false, message: "All feilds are required" })
    }
    if (req.files.music[0].mimetype != "audio/mpeg") {
        return res.status(400).json({ success: false, message: "music should a audio file" })
    }
    if (req.files.avatar[0].mimetype != "image/jpeg" && req.files.avatar[0].mimetype != "image/png") {
        return res.status(400).json({ success: false, message: "avatar should a audio file" })
    }
    const data = []
    for (let file in req.files) {
        const uploadmusic = await musicservice(req.files[file])
        data.push(uploadmusic)
    }
    const response = await Model.create({
        MusicName: req.body.musicName,
        Music: data,
        Artist: req.session.user.userid
    })

    return (res.status(201).json({ response, success: true, message: "music under verification" }))


}
module.exports = pending_Approval