import express from "express";
import {loadEnv} from '../config';
import { connectDB } from "./db";

const app = express();

//load env
loadEnv();

//connect to mongo db 
connectDB();

app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server is running on port ${Bun.env.SERVER_PORT}`)
})