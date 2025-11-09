import mongoose from "mongoose";
const MONGO_URI = "mongodb+srv://hathaikhanh:Khanh@12@cluster0.nzifrsp.mongodb.net/express";

export const connectDB = async () => {
    await mongoose.connect(MONGO_URI).then(() => {
        console.log("Connected to MongoDB");
    }
    ).catch((err) => {
        console.error("MongoDB connection error:", err);
    });
}