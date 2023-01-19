import express from 'express';
import { postUser } from '../controllers/user.js'

//http://localhost:5000/api/userRoutes

const router = express.Router();

router.post('/',postUser);
//router.get('/unUser',getUser);
//router.get('/dateAnniv',getDateUser);


export default router