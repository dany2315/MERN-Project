
import mongoose from 'mongoose'


const postSchema = mongoose.Schema({

      marque: String,
      modeles: String,
      annee: Number,
      prix: Number,
      src:String

});

const Voiture = mongoose.model('Voiture',postSchema)

export default Voiture; 

