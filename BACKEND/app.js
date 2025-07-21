import express from 'express';
import {nanoid} from 'nanoid'
import dotenv from 'dotenv';
dotenv.config();

import urlSchema from './src/models/shorturlSchema.js';
import short_url from './src/routes/short_url.routes.js';
import connectDB from './src/config/mongo.config.js';
const app=express();//instantiation
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.post('/api/create',short_url);

app.get('/:id',async (req,res)=>{
    const {id}=req.params;
    const url=await urlSchema.findOne({short_url:id});
    if(url){
        res.redirect(url.full_url);
    }
    else{
        res.status(404).send("Not Found");
    }
})

app.listen(5001,()=>{
    connectDB();
    console.log("Running on 5001")
})