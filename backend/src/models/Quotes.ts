import mongoose from "mongoose";

const QuoteSchema = new mongoose.Schema({
  id: { type: String },
  automobileId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "automobiles",
    required: true,
  },
  history: { type: Boolean },
  price: { type: String },
});
export const QuoteModel = mongoose.model("quotes", QuoteSchema);
