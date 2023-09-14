import * as mongoose from "mongoose";

const {Schema} = mongoose;

export const locationSchema = new Schema({
    name: String,
    description: String,
    resourceDescription: String,
    tag: [String],
    manager: String,
    registerDate: Date,
    isOperational: Boolean,
    locationId: String,
    resourceIds: [String],
})

export const resourceSchema = new Schema({
    resourceId: String,
    name: String,
    locationId: String,
    buildingNumber: String,
    floor: String,
    room: String,
    capacity: Number,
    equipment: String,
})

export const reservationSchema = new Schema({
    reservationId: String,
    reserverName: String,
    reserverEmail: String,
    reserverPhone: String,
    resourceId: String,
    description: String,
})