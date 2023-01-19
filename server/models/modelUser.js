import mongoose from "mongoose";
import { Schema } from "mongoose";
import validator from "validator"


const schemaUser = new Schema({


    
    firstName:{
        type:String,
        default:"",
        trim:true,
        uppercase:false
    },
    lastName:{
        type:String,
        default:"",
        trim:true,
        uppercase:false
    },
    role:{
        type:Number,
        min:2,
        required:true
    },
    mail:{
        type:String,
        validate:{
            validator:validator.isEmail,
            message:'you mail invalid',
        }
        
        
    },
    password:{  
        type:String, 
        required:true
    },
    voitures:{

        type:[mongoose.Schema.Types.ObjectId],
        ref:"voiture"
    }


},{versionKey:false});


const User = mongoose.model('User',schemaUser)

export default User ; 