import express from 'express'
import { getUsers, getUser, getDateUser } from '../controllers/user.js'

//http://localhost:5000/api/userRoutes

const router = express.Router();

router.get('/',getUsers)
router.get('/unUser',getUser)
router.get('/dateAnniv',getDateUser)


export default router