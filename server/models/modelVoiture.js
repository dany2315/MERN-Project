import mongoose from 'mongoose'
import { Schema } from 'mongoose';

const schemaVoiture = new Schema({

      marque:{
            type:String,
            uppercase:true
      },
      modele: {
            type:String,
            uppercase:true

      },
      src:{
            type:String,
            uppercase:true

      }

});

const Voiture = mongoose.model('Voiture',schemaVoiture)

export default Voiture; 

