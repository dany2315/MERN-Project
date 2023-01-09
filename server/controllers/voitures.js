


export const getVoitures = (req,res) => {
    res.send(
        'tu est arriver a l"adresse suivante http://localhost:5000/api/voitureRoutes'

    );
}

export const getVoiture =(req,res) => {

    console.log('tu est arriver au deuxieme lien de getVoiture');
}

export const createVoiture = (req,res)=>{
   
    res.send('you create post');
}  