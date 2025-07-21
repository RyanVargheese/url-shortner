import express, { urlencoded } from 'express';
import {nanoid} from 'nanoid'

const app=express();//instantiation
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.post('/api/create',(req,res)=>{
    const {url}=req.body;
    console.log(url);
    res.send(nanoid(7));
})

app.listen(5001,()=>{
    console.log("Running on 5001")
})