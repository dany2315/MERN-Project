import express  from 'express';
import { getVoitures ,getVoiture ,createVoiture } from '../controllers/voitures.js';

//http://localhost:5000/api/voitureroutes

const router = express.Router();

router.get('/',getVoitures),
router.get('/unevoiture',getVoiture),
router.post('/cree',createVoiture)

export default router