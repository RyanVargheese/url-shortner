import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import { redirectFromShortUrl } from './src/controllers/short_url.controller.js';
import short_url from './src/routes/short_url.routes.js';
import connectDB from './src/config/mongo.config.js';
import { errorHandler } from './src/utils/errorHandler.js';
import auth_routes from './src/routes/auth.routes.js'
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { attachUser } from './src/utils/attachUser.js';

const app=express();//instantiation
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());

app.use(attachUser)

app.use('/api/auth',auth_routes);
app.use('/api/create',short_url);

app.get('/:id',redirectFromShortUrl);

app.use(errorHandler);

app.listen(5001,()=>{
    connectDB();
    console.log("Running on 5001")
})