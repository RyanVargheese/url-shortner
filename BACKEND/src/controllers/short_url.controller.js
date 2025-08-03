import { createShortUrlServiceWithoutUser, createShortUrlServiceWithUser } from "../services/short_url.service.js";
import { getShortUrl } from "../dao/short_url.js";
import wrapAsync from "../utils/tryCatchWrapper.js";
import { redisClient } from "../config/redis.config.js";

const DEFAULT_EXPIRATION = 3600;

export const createShortUrl = wrapAsync(async (req, res) => {
  const { url, slug } = req.body;
  let shortUrl;
  if (req.user) { // Check if a user is authenticated
    shortUrl = await createShortUrlServiceWithUser(url, req.user._id, slug); // Function to create URL for authenticated user
  } else {
    shortUrl = await createShortUrlServiceWithoutUser(url); // Function to create URL for unauthenticated user
  }

  res.status(200).json({ shortUrl: process.env.APP_URL + shortUrl }); // Responds with the full short URL
});


export const redirectFromShortUrl = wrapAsync(async (req, res) => {
  const { id } = req.params;

  //promise based get
  const fullUrl = await redisClient.get(id);

  if (fullUrl) {
    return res.redirect(JSON.parse(fullUrl));
  } else {
    const url = await getShortUrl(id);
    if (!url) {
      throw new Error("Short Url not found");
    }
    //Since the data was not found on redis
    await redisClient.setEx(id, DEFAULT_EXPIRATION, JSON.stringify(url.full_url));

    // Redirect to the full URL
    res.redirect(url.full_url);
  }
});

export const createCustomShortUrl = wrapAsync(async (req, res) => {
  const { url, slug } = req.body;
  const shortUrl = await createShortUrlServiceWithoutUser(url, slug);
  res.status(200).json({ shortUrl: process.env.APP_URL + shortUrl })
})