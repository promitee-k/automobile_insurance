import mongoose from "mongoose";

const AutomobileSchema = new mongoose.Schema({
  type: { type: String },
  models: [{ type: String }],
  brand: { type: String, required: true },
  year: { type: String },
});

export const AutoMobileModel = mongoose.model("automobiles", AutomobileSchema);
