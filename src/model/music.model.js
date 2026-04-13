const mongoose=require('mongoose')
const schema=mongoose.Schema({
musicName:{type:String,required:true}
,music:[{type:String,required:true}]
,artist:{type:mongoose.Schema.Types.ObjectId,ref:"user"}
})
const model=mongoose.model("music",schema)

module.exports=model