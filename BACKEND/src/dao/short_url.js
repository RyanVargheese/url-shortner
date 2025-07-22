import urlSchema from '../models/shorturlSchema.js';

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
        throw new Error(err);
    }
}

export const getShortUrl=async (shortUrl)=>{
    return await urlSchema.findOneAndUpdate({short_url:shortUrl},{$inc:{clicks:1}})
}