import mongoose, { connect } from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const URI = process.env.MongoDBURI;

export const connectDB = async () => {
  await mongoose.connect(URI).then(() => console.log("DB Connected"));
};
