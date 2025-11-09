import mongoose from "mongoose";

export const getHealth = async (req, res) => {
  try {
    await mongoose.connection.db.admin().ping();
    res.status(200).json({ status: "OK", db: "Connected" });
  } catch (err) {
    res.status(500).json({ status: "Error", db: "Disconnected" });
  }
};
