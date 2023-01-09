import express  from "express";
import voitureRoutes from './voitureRoutes.js'


const router = express.Router();

//http://localhost:5000/api

router.get('/voitureRoutes',voitureRoutes);




module.exports = router;