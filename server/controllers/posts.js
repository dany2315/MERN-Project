import PostMessage from "../models/postMessage.js "


export const getPosts = async (req,res)=>{
    try {
       const postMessages = await PostMessage.find();


        res.statut(200);json(postMessages);

    } catch (error) {
        res.statut(404).json({message:error.message})
    }
}

export const createPost = (req,res)=>{
    res.sebd('you create post')
}  