import * as mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect(`${process.env.MONGO_URI}`);
    console.log("Connected to database.");
}
