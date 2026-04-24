import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on("connected", () => console.log("Database Connected"));
  mongoose.connection.on("error", (err) => console.error("Database connection error:", err));

  const options = {};
  if (process.env.TLS_CA_FILE) {
    options.tls = true;
    options.tlsCAFile = process.env.TLS_CA_FILE;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, options);
  } catch (error) {
    console.error("Initial database connection failed:", error.message);
  }
};

export default connectDB;
