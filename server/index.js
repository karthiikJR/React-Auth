import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/users.js";
import dotenv from 'dotenv'
dotenv.config()
const app = express()

app.use(express.json());
app.use(cors());
app.use("/auth", userRouter)

const CON = process.env.DB_SERVER;
const PORT = process.env.PORT;

mongoose.connect(CON);

app.listen(PORT, () => {
	console.log("Connected to port 3001");
});