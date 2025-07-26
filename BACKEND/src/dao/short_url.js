import urlSchema from '../models/shorturlSchema.js';
import { ConflictError } from '../utils/errorHandler.js';

export const saveShortUrl=async(longUrl,shortUrl,userId)=>{
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

export const getCustomShortUrl=async(slug)=>{
    return await urlSchema.findOne({short_url:slug});

}