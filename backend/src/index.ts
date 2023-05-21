import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { authRouter } from "./routes/auth";

const app = express();

app.use(express.json());

app.use(cors());

app.use("/auth", authRouter);

mongoose.connect(
  "mongodb+srv://admin:Password99@automobile-insurance.sqpr0vj.mongodb.net/automobile-insurance?retryWrites=true&w=majority"
);
app.listen(3001, () => console.log("server started"));
