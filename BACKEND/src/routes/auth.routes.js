import express from 'express'
import { login_user,register_user } from '../controllers/auth.controller.js';

const auth_routes=express.Router();

auth_routes.post('/login',login_user);
auth_routes.post('/register',register_user);

export default auth_routes;
