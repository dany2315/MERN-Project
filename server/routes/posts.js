import express  from "express";

import{ getvoitures ,createPost } from '../controllers/posts.js';



const router = express.Router();

router.get('/',getvoitures);
router.get('/a',createPost);



export default router
