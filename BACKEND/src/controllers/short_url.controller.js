import { createShortUrlServiceWithoutUser,createShortUrlServiceWithUser } from "../services/short_url.service.js";
import { getShortUrl } from "../dao/short_url.js";
import wrapAsync from "../utils/tryCatchWrapper.js";

export const createShortUrl = wrapAsync(async (req, res) => {
  const {url,slug} = req.body;
  let shortUrl;
  if (req.user) { // Check if a user is authenticated
    shortUrl = await createShortUrlServiceWithUser(url, req.user._id,slug); // Function to create URL for authenticated user
  } else {
    shortUrl = await createShortUrlServiceWithoutUser(url); // Function to create URL for unauthenticated user
  }

  res.status(200).json({ shortUrl: process.env.APP_URL + shortUrl }); // Responds with the full short URL
});


export const redirectFromShortUrl=wrapAsync(async (req,res)=>{
        const {id}=req.params;
        const url=await getShortUrl(id);
        if(!url) throw new Error("Short Url not found");
        res.redirect(url.full_url);
})

export const createCustomShortUrl=wrapAsync(async(req,res)=>{
        const {url,slug}=req.body;
        const shortUrl=await createShortUrlServiceWithoutUser(url,slug);
        res.status(200).json({shortUrl:process.env.APP_URL+shortUrl})
})