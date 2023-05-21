import mongoose from "mongoose";

const QuoteSchema = new mongoose.Schema({
  id: { type: String },
  history: { type: Boolean },
  price: { type: String },
});
export const QuoteModel = mongoose.model("quotes", QuoteSchema);
