import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to Database");
    } catch (error) {
        console.log(`Error connecting to database: ${error.message}`); // More descriptive error message
        //Exiting the process if the database connection fails on startup
        process.exit(1);
    }
}

export default connectDB;