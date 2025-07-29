import express from 'express'
import { login_user,register_user,get_current_user, logout_user } from '../controllers/auth.controller.js';
import authMiddleware from '../middlewares/auth.middleware.js';

const auth_routes=express.Router();

auth_routes.post('/login',login_user);
auth_routes.post('/register',register_user);
auth_routes.post('/logout',logout_user);
auth_routes.get('/me',authMiddleware,get_current_user);

export default auth_routes;
