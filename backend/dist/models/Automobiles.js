"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoMobileModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const AutomobileSchema = new mongoose_1.default.Schema({
    id: { type: String },
    type: { type: String },
    model: { type: String },
    make: { type: String },
    year: { type: String },
});
exports.AutoMobileModel = mongoose_1.default.model("automobiles", AutomobileSchema);
