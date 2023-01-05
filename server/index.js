import express from 'express'
import cors from 'cors';
import mongoose from 'mongoose'
import bodyParser from 'body-parser';
import postRoutes from './routes/posts.js';

const app = express() 

app.use('/posts',postRoutes)

app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
app.use(cors())

const CONNECTION_URL = 'mongodb+srv://DAVID:d1PDwjEJNCcrSlDp@cluster0.x9nawhh.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000 ;

mongoose.set('strictQuery',false)
mongoose.connect(CONNECTION_URL)
    .then(()=>app.listen(PORT,()=>console.log(`server running in port:${PORT}`)))

    .catch((error)=>console.log(error.message));








