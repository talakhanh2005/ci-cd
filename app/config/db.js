import mongoose from "mongoose";
const MONGO_URI = "mongodb+srv://hathaikhanh:hathaikhanh@cluster0.z6hdg72.mongodb.net/?appName=Cluster0";

export const connectDB = async () => {
    await mongoose.connect(MONGO_URI).then(() => {
        console.log("Connected to MongoDB");
    }
    ).catch((err) => {
        console.error("MongoDB connection error:", err);
    });
}