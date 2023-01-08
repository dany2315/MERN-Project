import Voiture from '../models/postVoiture.js'


export const getvoitures = (req,res) => {
    try {
       res
    
       
    } catch (error) {
        res.status(404).json({message:error.message});
    }
}

export const createPost = (req,res)=>{
    res.send('you create post');
}  