import { createShortUrlServiceWithoutUser } from "../services/short_url.service.js";
import { getShortUrl } from "../dao/short_url.js";
import urlSchema from '../models/shorturlSchema.js';
import wrapAsync from "../utils/tryCatchWrapper.js";

export const createShortUrl=wrapAsync(async (req,res,next)=>{
    
        const {url}=req.body;
        const shortUrl= await createShortUrlServiceWithoutUser(url);
        res.status(200).json({shortUrl:process.env.APP_URL+shortUrl});
    }
)

export const redirectFromShortUrl=wrapAsync(async (req,res,next)=>{
        const {id}=req.params;
        const url=await getShortUrl(id);
        if(!url) throw new Error("Short Url not found");
        res.redirect(url.full_url);
})