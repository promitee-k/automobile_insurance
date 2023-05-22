import mongoose from "mongoose";

const PaymentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  quoteId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "quotes",
    required: true,
  },
  paymentMethod: { type: String },
  paymentStatus: { type: String },
  date: { type: Date },
});

export const PaymentModel = mongoose.model("payments", PaymentSchema);
