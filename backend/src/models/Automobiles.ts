import mongoose from "mongoose";

const AutomobileSchema = new mongoose.Schema({
  type: { type: String },
  models: { type: [String] },
  brand: { type: String },
  year: { type: String },
});

export const AutoMobileModel = mongoose.model("automobiles", AutomobileSchema);
