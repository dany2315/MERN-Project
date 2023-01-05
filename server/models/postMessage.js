import mongoose from 'mongoose'


const postSchema = mongoose.Schema({
    title:String,
    message:String,
    tags:[String],
    selectedFile:String,
    likeCount:{
        type:Number,
        default:0,
    },
    createdAd:{
        type:Date,
        default:new Date(),
    },

});

const PostMessage = mongoose.model('PostMessage',postSchema)

export default PostMessage;