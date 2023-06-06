import express, { NextFunction, Request, Response } from "express";
import bcrypt from "bcrypt";
import { UserModel } from "../models/Users";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/signup", async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });
  if (user) {
    return res.json({ message: "Email already in use" });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new UserModel({ email, password: hashedPassword });
  await newUser.save();
  res.json({ message: "User Registered Successfully!" });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await UserModel.findOne({ email });

  if (!user) {
    return res
      .status(400)
      .json({ message: "Email or password is incorrect" });
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res
      .status(400)
      .json({ message: "Password is incorrect" });
  }
  const token = jwt.sign({ id: user._id }, "secret");
  res.json({ token, userID: user._id });
});



export { router as authRouter };

