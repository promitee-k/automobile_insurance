"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const PaymentSchema = new mongoose_1.default.Schema({
    userId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "users",
        required: true,
    },
    quoteId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "quotes",
        required: true,
    },
    paymentMethod: { type: String },
    paymentStatus: { type: String },
    date: { type: Date },
});
exports.PaymentModel = mongoose_1.default.model("payments", PaymentSchema);
