import express, { Request, Response } from "express";
import { AutoMobileModel } from "../models/Automobiles";
import { PaymentModel } from "../models/Payments";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const automobiles = await AutoMobileModel.find({});
    res.json(automobiles);
  } catch (err) {}
});

router.post("/payment", async (req: Request, res: Response) => {
  const newPayment = new PaymentModel({ ...req.body });
  newPayment.save();
});

export { router as quoteRouter };
