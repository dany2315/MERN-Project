import Voiture from '../models/modelVoiture.js'


export const createVoiture = async(req, res)=> {
            
  
    console.log(req.body);
    const voiture = await  Voiture.create( req.body );
    try{
        res.status(200).send(voiture); 
    } catch(error){
         res.status(404).send(error);
    }
   
}