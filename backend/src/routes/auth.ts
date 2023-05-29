import express, { Request, Response } from "express";
import bcrypt from "bcrypt";
import { UserModel } from "../models/Users";
import jwt from "jsonwebtoken";
import { AutoMobileModel } from "../models/Automobiles";

const router = express.Router();



router.post("/signup", async (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  const user = await UserModel.find({ email });
  if (user) {
    return res.json({ message: "Email already in use" });
  }
  const hashedPassword = bcrypt.hash(password, 10);
  const newUser = new UserModel({ username, email, password: hashedPassword });
  newUser.save();
  res.json({ message: "User Registered Successfully!" });
});

router.post("/login", async (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  const user = await UserModel.findOne({ email });
  if (!user) {
    return res.json({ message: "User does not exist" });
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.json({ message: "Incorrect Password" });
  }

  const token = jwt.sign({ id: user._id }, "secret"); //use environmental var here
  res.json({ token, userID: user._id });
});

export { router as authRouter };
