import express, { Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";
import { authRouter } from "./routes/auth";
import { AutoMobileModel } from "./models/Automobiles";
import { insuranceRouter } from "./routes/insurance";

const app = express();
const port = 3001;
app.use(express.json());

app.use(cors());

app.use("/auth", authRouter);

app.use("/insurance", insuranceRouter);

app.get("/", async (req, res) => {
  let automobiles = await AutoMobileModel.find();
  res.send(automobiles).status(200);
});
mongoose.connect(
  "mongodb+srv://admin:Password99@automobile-insurance.sqpr0vj.mongodb.net/automobile-insurance?retryWrites=true&w=majority",
);
app.listen(port, () => console.log("server started"));
