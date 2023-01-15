import mongoose from "mongoose"
import isEmail from "validator"


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
        unique:true,
        validate:{
            validator:isEmail,
            message: `${value} invalid mail`,
            isAsync:false,
        },
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