const musicservice = require('../../services/imagekit.js')
const MusicModel = require('../../model/music.model.js')
const WaitingAdminApproval = require('../../model/pendingapproval.model.js')
async function imagekit(req, res) {
    try {
        console.log(req.body.pending)
        if (req.body.pending === "Approved") {
            const pending_Approval_data = await WaitingAdminApproval.findOne({ _id: req.body.id })
            const music_data = await MusicModel.create({
                MusicName: pending_Approval_data.MusicName,
                Music: pending_Approval_data.Music,
                Artist: pending_Approval_data.Artist
            })
            await WaitingAdminApproval.deleteOne({ _id: req.body.id })
            return res.status(201).json({ music_data, success: true, message: `${pending_Approval_data.MusicName} is approved` })
        }
        if (req.body.pending === "Reject") {
            const pending_Approval_data = await WaitingAdminApproval.findOne({ _id: req.body.id })
            await WaitingAdminApproval.deleteOne({ _id: req.body.id })
            return res.status(201).json({ success: true, message: `${pending_Approval_data.MusicName} is rejected` })
        }
    }
    catch (error) {
        res.status(500).send({ success: false, message: error.message })
        console.log(error)
    }

}
module.exports = imagekit