import mongoose from "mongoose"
import validator from "validator"


const schemaUser = mongoose.Schema({

    firstName:{
        type:String,
        default:"",
        trim:true,
        uppercase:true
    },
    lastName:{
        type:String,
        default:"",
        trim:true,
        uppercase:true
    },
    role:{
        type:Number,
        min:2,
        required:true
    },
    mail:{
        type:String,
        validate:{
            validator :validator.isEmail,
            message :` mail invalid`,
            async : false
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


});


const User = mongoose.model('User',schemaUser)

export default User ;