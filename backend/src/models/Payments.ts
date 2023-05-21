import mongoose from "mongoose";

const PaymentSchema = new mongoose.Schema({
  userId: {},
  quoteId: {},
  paymentMethod: { type: String },
  paymentStatus: { type: String },
  date: { type: Date },
});

export const PaymentModel = mongoose.model("payments", PaymentSchema);
