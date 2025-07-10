import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connectDb = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${connectDb.connection.host}`);
  } catch (error) {
    console.log("Error in connection to MongoDB: ", error);

    process.exit(1); // Failure code
  }
};
