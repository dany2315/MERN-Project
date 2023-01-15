import express  from "express";
import voitureRoutes from './voitureRoutes.js';
import userRoutes from './userRoutes.js';
import adminRoutes from './adminRoutes.js'

const router = express.Router();

//http://localhost:5000/api

router.use('/admin',adminRoutes)

router.use('/voitureRoutes',voitureRoutes);
router.use('/userRoutes',userRoutes)


export default router
