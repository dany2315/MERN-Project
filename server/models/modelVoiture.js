import mongoose from 'mongoose'
import { Schema } from 'mongoose';
 


const schemaVoiture = new Schema({

      marque:{
            type:String,
            uppercase:false,
            trim:true,
            required:true
      },
      modele: {
            type:String,
            uppercase:false,
            trim:true,
            required:true


      },
      prix:{
            type:Number,
            trim:true,
            required:true
      },
      images:[{
            type:String,
            uppercase:false,
            trim:true,
            default:""
      }],


},{versionKey:false});

const Voiture = mongoose.model('Voiture',schemaVoiture)

export default Voiture; 

