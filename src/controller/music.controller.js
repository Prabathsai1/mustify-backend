const musicservice = require('../services/imagekit.js')
const musicModel = require('../model/music.model.js')
async function imagekit(req, res) {
    console.log(req.files)
    console.log(req.files.avatar[0].mimetype)
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
    const response = await musicModel.create({
        musicName: req.body.musicName,
        music: data,
        artist: req.session.user.userid
    })

    return (res.status(201).json({ response, success: true, message: "music uploaded successfully" }))


}
module.exports = imagekit