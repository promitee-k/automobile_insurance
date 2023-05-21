import express, { Request, Response } from "express";
import { UserModel } from "../models/Users";

const router = express.Router();

router.post("/signup", async (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  const user = await UserModel.findOne({ email: "email@gmail.com" });
  res.json(user);
});

router.post("/signin", async () => {});

export { router as authRouter };
