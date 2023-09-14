import express from "express";
import {loadEnv} from '../config';
import { connectDB } from "./db";

const app = express();

const SERVER_PORT = parseInt(process.env.SERVER_PORT) || 8888;

//load env
loadEnv();

//connect to mongo db 
connectDB();

app.get("/hc", (req, res) => {
    res.send("Server is Running!");
})

app.listen(SERVER_PORT, () => {
    console.log(`Server is running on port ${process.env.SERVER_PORT}`)
})