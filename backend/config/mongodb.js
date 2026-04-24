import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on("connected", () => console.log("Database Connected"));
  mongoose.connection.on("error", (err) => console.error("Database connection error:", err));

  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/appointy`);
  } catch (error) {
    console.error("Initial database connection failed:", error.message);
  }
};

export default connectDB;
