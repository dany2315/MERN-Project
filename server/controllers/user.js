import User from '../models/modelUser.js'


export const postUser = async(req, res)=> {
            
    
   console.log({User});
  
        const user = await  User.create( req.body );
        
            res.status(200).send(user); 
        
            res.status(404).send(error);
                        
  
        
 

    console.log(req.body.mail.validate);
    
   
};
export const getUser = async(req, res)=> {
            
    
    console.log({User});
   
         const user = await  User.create( req.body );
         
             res.status(200).send(user); 
         
             res.status(404).send(error);
                         
   
         
  
 
     console.log(req.body.mail.validate);
     
    
 };