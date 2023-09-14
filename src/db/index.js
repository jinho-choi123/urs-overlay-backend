import * as mongoose from "mongoose";
import * as URS_Schema from './schema';

export const connectDB = async () => {
    await mongoose.connect(`${process.env.MONGO_URI}`);
    console.log("Connected to database.");
}

export const Location = mongoose.model("Location", URS_Schema.locationSchema);
export const Resource = mongoose.model("Resource", URS_Schema.resourceSchema);
export const Reservation = mongoose.model("Reservation", URS_Schema.reservationSchema);