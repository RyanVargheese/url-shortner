import express from 'express'
import authMiddleware from '../middlewares/auth.middleware.js';
import { getAllUserUrls } from '../controllers/user.controller.js';

const auth_routes=express.Router();

auth_routes.post('/urls',authMiddleware,getAllUserUrls);


export default auth_routes;
