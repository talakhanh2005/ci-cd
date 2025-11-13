import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
    const MONGO_URI = process.env.MONGO_URI;
    await mongoose.connect(MONGO_URI).then(() => {
        console.log("Connected to MongoDB");
    }
    ).catch((err) => {
        console.error("MongoDB connection error:", err);
        process.exit(1);
    });
}