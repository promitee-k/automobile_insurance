import express, { Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";
import { authRouter } from "./routes/auth";
import { quoteRouter } from "./routes/quote";

const app = express();
const port = 3001;
app.use(express.json());

app.use(cors());

app.use("/auth", authRouter);

app.use("/quote", quoteRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("HELLO FROM EXPRESS");
});
mongoose.connect(
  "mongodb+srv://admin:Password99@automobile-insurance.sqpr0vj.mongodb.net/automobile-insurance?retryWrites=true&w=majority"
);
app.listen(port, () => console.log("server started"));
