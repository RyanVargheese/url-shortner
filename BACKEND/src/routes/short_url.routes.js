import express from 'express';
import authMiddleware from '../middlewares/auth.middleware.js';
import { createShortUrl} from '../controllers/short_url.controller.js';
const router =express.Router();

router.post('/',authMiddleware,createShortUrl);

export default router;
