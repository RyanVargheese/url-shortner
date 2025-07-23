import urlSchema from '../models/shorturlSchema.js';
import { ConflictError } from '../utils/errorHandler.js';

export const saveShortUrl=async(shortUrl,longUrl,userId)=>{
    try{
        const newUrl=new urlSchema({
        full_url:longUrl,
        short_url:shortUrl
    })
    if(userId)
        newUrl.user=userId;

    await newUrl.save();
    }
    catch(err){
        if(err.code==11000){
            throw new ConflictError("Short URL already exists");
            
        }
        throw new Error(err);
    }
}

export const getShortUrl=async (shortUrl)=>{
    return await urlSchema.findOneAndUpdate({short_url:shortUrl},{$inc:{clicks:1}})
}