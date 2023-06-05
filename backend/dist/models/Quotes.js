"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuoteModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const QuoteSchema = new mongoose_1.default.Schema({
    id: { type: String },
    automobileId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "automobiles",
        required: true,
    },
    history: { type: Boolean },
    price: { type: String },
});
exports.QuoteModel = mongoose_1.default.model("quotes", QuoteSchema);
