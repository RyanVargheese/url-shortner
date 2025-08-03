import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import { redirectFromShortUrl } from './src/controllers/short_url.controller.js';
import short_url from './src/routes/short_url.routes.js';
import connectDB from './src/config/mongo.config.js';
import { errorHandler } from './src/utils/errorHandler.js';
import auth_routes from './src/routes/auth.routes.js'
import user_routes from './src/routes/user.routes.js'
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { attachUser } from './src/utils/attachUser.js';
import connectRedis from './src/config/redis.config.js';


const PORT = process.env.PORT || 5001;



const app=express();//instantiation
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());

app.use(attachUser)

app.use('/api/user',user_routes);
app.use('/api/auth',auth_routes);
app.use('/api/create',short_url);

app.get('/:id',redirectFromShortUrl);

app.use(errorHandler);

const startApplication = async () => {
  try {
    //Connect to the database
    await connectDB();
    
    //Connect to Redis
    await connectRedis();

    //Starts a server and makes it Listen for incoming requests on a specified port
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });

  } catch (error) {
    console.error("Application failed to start:", error);
    process.exit(1);
  }
};

// Call the function to start the entire process
startApplication();
