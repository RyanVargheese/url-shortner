import { createShortUrlServiceWithoutUser } from "../services/short_url.service.js";
import { getShortUrl } from "../dao/short_url.js";
import urlSchema from '../models/shorturlSchema.js';
export const createShortUrl=async (req,res,next)=>{
    try {
        const {url}=req.body;
        const shortUrl= await createShortUrlServiceWithoutUser(url);
        res.send(process.env.APP_URL+shortUrl);
    } catch (error) {
        next(err);
    }
}

export const redirectFromShortUrl=async (req,res)=>{
    const {id}=req.params;
    const url=await getShortUrl(id);
    if(url){
        res.redirect(url.full_url);
    }
    else{
        res.status(404).send("Not Found");
    }
}