import express  from "express";
import { getFullVoitures,  getVendeurs, getAcheteurs } from '../controllers/admin.js'


const router = express.Router();

//http://localhost:5000/api/admin

router.get('/',getFullVoitures);
router.get('/vendeurs',getVendeurs);
router.get('/acheteurs',getAcheteurs)

export default router