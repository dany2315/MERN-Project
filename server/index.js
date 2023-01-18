import express from 'express'
import cors from 'cors';
import mongoose from 'mongoose'
import morgan from 'morgan';
import router from './routes/index.js';



//connection to mongoDB 


const CONNECTION_URL = 'mongodb+srv://DAVID:d1PDwjEJNCcrSlDp@cluster0.x9nawhh.mongodb.net/?retryWrites=true&w=majority'

mongoose.set('strictQuery',false)
mongoose.connect(CONNECTION_URL)
    .then(()=>console.log(`SUCCESS`))

    .catch((error)=>console.log('probleme de connexion '+error.message));

const db =mongoose.connection;



//express server URL:  http://localhost:5000/api
const app = express() 
const PORT = process.env.PORT || 5000 ;

app.use('/api',router);
app.use(morgan('dev'));

app.use(express.json());



//use cors
app.use(cors());
app.listen(PORT,()=>{

    console.log(`server running in port:${PORT}`)});












