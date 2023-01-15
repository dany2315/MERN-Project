export const getFullVoitures =(req,res) => {

    res.send(`tu est arriver au lien ${req.originalUrl}`);
}

export const getVendeurs =(req,res) => {

    console.log('tu est arriver au deuxieme lien de getVoiture');
}

export const getAcheteurs=(req,res) => {

    console.log('tu est arriver au deuxieme lien de getVoiture');
}
