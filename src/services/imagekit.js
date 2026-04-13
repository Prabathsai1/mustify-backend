const ImageKit=require("@imagekit/nodejs")
const env=require("../config/config.js")
const client=new ImageKit({
privateKey:env.privateKey
})

async function music_upload(file){
    const data=file[0].buffer.toString("base64")

    const music=await client.files.upload({
        file:data,
        fileName:"music1",
        folder:"music"
        })
    return(music.url)
}
module.exports=music_upload