import express  from "express";
import voitureroutes from './voitureRoutes.js';


const router = express.Router();

//http://localhost:5000/api

router.get('/voitureRoutes',voitureroutes);

export default router
