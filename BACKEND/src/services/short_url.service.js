import { generateNanoId } from "../utils/helper.js";
import { getCustomShortUrl, saveShortUrl } from "../dao/short_url.js";


export const createShortUrlServiceWithoutUser= async (url)=>{
    const shortUrl=await generateNanoId(7)//making a new Short url using nanoid
    await saveShortUrl(url,shortUrl);
    if(!shortUrl)
        throw new Error("Short URL not generated!!");
    return shortUrl;
}

export const createShortUrlServiceWithUser= async (url,userId,slug=null)=>{

    const shortUrl= slug || generateNanoId(7)//making a new Short url using nanoid
    const exists= await getCustomShortUrl(slug);
    if(exists)
        throw new Error("This Custom URL already exists");
    await saveShortUrl(url,shortUrl,userId);
    return shortUrl;
}