const Model = require("../../model/pendingapproval.model")
async function WaitingAdminApproval(req,res) {
    try { 
        const Data = await Model.aggregate([
            { $match: {} },
            {
                $group: {
                    _id: "$_id",
                    musicname: { $push: "$MusicName" },
                    music: { $push: "$Music" },
                    artist: { $push: "$Artist" },
                    status:{$push:"$Status"}
                }
            },
            {
                $lookup: {
                    from: "users",
                    localField: "artist",
                    foreignField: "_id",
                    as:"artistDetails"
                }
            },
            {
                $project: {
                    _id:1,
                    musicname: 1,
                    music: 1,
                    "artistDetails.UserName":1,
                    "artistDetails.Email":1,
                    status:1
                }
            }
        ])
        res.status(200).json({Data,success:true,message:"data fetched successfully"})
    }
    catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:error.message})
    }
}
module.exports=WaitingAdminApproval