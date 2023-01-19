import express  from "express";
import { veriftoken } from "../controllers/verif.js";


const router = express.Router()

//http://localhost:5000/api


router.get('/',veriftoken)


export default router