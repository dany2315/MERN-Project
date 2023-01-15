import mongoose from 'mongoose'


const schemaVoiture = mongoose.Schema({

      marque: String,
      modeles: String,
      annee: Number,
      prix: Number,
      src:String

});

const Voiture = mongoose.model('Voiture',schemaVoiture)

export default Voiture; 

