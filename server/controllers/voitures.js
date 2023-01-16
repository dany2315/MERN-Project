import Voiture from '../models/modelVoiture.js'


export const getVoitures = (req,res) => {

    Voiture.find({})
    .then(voitures=>{
        res.status(200).send(voitures+' tu est arriver a l"adresse suivante http://localhost:5000/api/voitureRoutes' )
    })
    .catch((error)=>{
    res.status(404).json({error}).send('voici l"erreur'+ error.message)
    })
}

export const getVoiture =(req,res) => {

    console.log('tu est arriver au deuxieme lien de getVoiture');
}

export const createVoiture = (req,res)=>{
    let voiture = new Voiture({...req.body});
    console.log(voiture);
    voiture.save().then(()=>{
        res.status(200).send('create reussi')
        },(error)=>{
        res.status(404).send(error);
        })

}