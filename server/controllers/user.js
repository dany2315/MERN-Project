export const getUsers = (req,res)=>{

    res.send(`you are in a ${req.url}`)
};

export const getUser = (req,res)=>{

    res.send(`you are in a ${req.url}`)
};

export const getDateUser = (req,res)=>{
 res.send(`you are in a ${req.originalUrl}`)
}