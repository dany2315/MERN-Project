import express from 'express'
import cors from 'cors';
import mongoose from 'mongoose'
import morgan from 'morgan';
import routes from './routes/posts.js';

const app = express() 

app.use('/api',routes)
app.use(morgan('dev'))

app.use(express.json())
app.use(cors())

const CONNECTION_URL = 'mongodb+srv://DAVID:d1PDwjEJNCcrSlDp@cluster0.x9nawhh.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000 ;

mongoose.set('strictQuery',false)
mongoose.connect(CONNECTION_URL)
    .then(()=>app.listen(PORT,()=>console.log(`server running in port:${PORT}`)))

    .catch((error)=>console.log(error.message));








