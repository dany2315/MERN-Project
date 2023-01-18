import express  from 'express';
import {createVoiture } from '../controllers/voitures.js';

//http://localhost:5000/api/voitureRoutes

const router = express.Router();


//router.get('/',getVoitures),
//router.get('/unevoiture',getVoiture),
router.post('/cree',createVoiture)

export default router
