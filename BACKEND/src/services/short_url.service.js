import { generateNanoId } from "../utils/helper.js";
import { saveShortUrl } from "../dao/short_url.js";


export const createShortUrlServiceWithoutUser= async (url)=>{
    const shortUrl=await generateNanoId(7)//making a new Short url using nanoid
    await saveShortUrl(shortUrl,url);
    if(!shortUrl)
        throw new Error("Short URL not generated!!");
    return shortUrl;
}

export const createShortUrlServiceWithUser= async (url,userId)=>{
    const shortUrl=await generateNanoId(7)//making a new Short url using nanoid
    await saveShortUrl(shortUrl,userId);
    return shortUrl;
}