import express from 'express'
import cors from 'cors';
const app = express()

const port = 3000

app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.status(200).send("welcome form the hopage")
})
app.get("/admin",(req,res)=>{
    res.send("welcome to secret admin")
})


app.listen(3000,()=>{
    console.log("server is up on port 3000")
})
