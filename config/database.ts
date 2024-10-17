import mongoose from "mongoose";
let connected = false;
const connectDB = async () => {
  mongoose.set("strictQuery", true);
  // if connected don't connect again
  if (connected) {
    console.log("Already connected to database");
    return;
  }
  //connect to database
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGO_URI is not defined");
    }
    await mongoose.connect(process.env.MONGODB_URI);
    connected = true;
    console.log("Successfully connected to the database");
  } catch (error) {
    if (error instanceof mongoose.Error) {
      // Handle mongoose specific errors
      console.error("Mongoose error:", error);
    } else {
      console.error("General error:", error);
    }
  }
};

export default connectDB;
