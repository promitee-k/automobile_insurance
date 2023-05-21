import mongoose from "mongoose";

const AutomobileSchema = new mongoose.Schema({
  id: { type: String },
  type: { type: String },
  model: { type: String },
  make: { type: String },
  year: { type: String },
});

export const AutoMobileModel = mongoose.model("automobiles", AutomobileSchema);
