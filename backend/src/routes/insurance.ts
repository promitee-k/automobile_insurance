import express, { Request, Response } from "express";
import { InsuranceModel } from "../models/Insurances";

const router = express.Router();

router.post("/details", async (req: Request, res: Response) => { 
    const newInsurance = new InsuranceModel({
      ...req.body
    })
    await newInsurance.save();
    res.json({message:'Insurance data stored'})
});

export { router as insuranceRouter };
