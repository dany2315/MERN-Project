import Voiture from '../models/modelVoiture.js'


export const createVoiture = async(req, res)=> {
            
    const body = JSON.stringify(req.body)
    console.log(body);
   
    const voiture = await  Voiture.create( body )
    console.log(voiture);
    try{
        res.status(200).send(voiture); 
    } catch(error){
         res.status(404).send(error);
    }
   
}