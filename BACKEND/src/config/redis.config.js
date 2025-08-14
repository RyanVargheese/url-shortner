import Redis from 'redis';

// Created a client instance and exporting to controller functions
export const redisClient = Redis.createClient({ url: 'redis://redis:6380' });

//Redis clinet emits an 'error' event whenever someting wrong happens,Hence creating a listener for it
redisClient.on('error', err => console.log('Redis Client Error', err));


const connectRedis = async () => {
  try {
    // initates a connection between client and the redis server
    await redisClient.connect();
    console.log("Redis client connected successfully!");
  } catch (err) {
    console.error("Failed to connect to Redis:", err);
    //Exiting the process is a good Practise
    process.exit(1);
  }
};

export default connectRedis
