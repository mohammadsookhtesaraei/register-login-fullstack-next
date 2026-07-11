import mongoose from "mongoose";

const url = process.env.MONGO_URL!;

export async function connectDB() {
  try {
    if (mongoose.connection.readyState === 1) {
      console.log("Already connectDB🟢!");
      return;
    }

    mongoose.set("strictQuery", false);
    await mongoose.connect(url);
    console.log("mongoDB connect✅!");
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error.message);
    }
    console.log("error 500");
  }
};


export default connectDB;
