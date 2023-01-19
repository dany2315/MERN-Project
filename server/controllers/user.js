import User from '../models/modelUser.js'


export const postUser = async(req, res)=> {
            
    
   console.log({User});
    
    if(req.body.mail.validate===true){
    
        const user = await  User.create( req.body );
        try{
            res.status(200).send(user); 
        } catch(error){
            res.status(404).send(error);
        }
                
    }else{
        
 

    console.log(req.body.mail.validate);
    
   
}}