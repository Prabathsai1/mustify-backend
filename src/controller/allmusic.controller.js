const Model=require('../model/music.model.js')
const mongoose=require('mongoose')
async function getMusic(req,res){

const Musics=await Model.aggregate([
{$match:{}},{
$group:{_id:"$_id",musicname:{$push:"$MusicName"},music:{$push:"$Music"},artist:{$first:"$Artist"}}},
{$lookup:{
    from:"users",
    localField:"artist",
    foreignField:"_id",
    as:"artistDetails"
}},
{
$project:{
    musicname:1,
    music:1,
    "artistDetails.UserName":1,
    "artistDetails.Email":1
}
}
])
res.send(Musics)

}
module.exports=getMusic