import express from 'express';
import {nanoid} from 'nanoid'
import dotenv from 'dotenv';
dotenv.config();

import { redirectFromShortUrl } from './src/controllers/short_url.controller.js';
import urlSchema from './src/models/shorturlSchema.js';
import short_url from './src/routes/short_url.routes.js';
import connectDB from './src/config/mongo.config.js';
import { errorHandler } from './src/utils/errorHandler.js';
const app=express();//instantiation
app.use(express.json());
app.use(express.urlencoded({extended:true}))


app.use('/api/create',short_url);

app.get('/:id',redirectFromShortUrl);

app.use(errorHandler);

app.listen(5001,()=>{
    connectDB();
    console.log("Running on 5001")
})