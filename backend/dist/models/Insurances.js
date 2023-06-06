"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsuranceModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const InsuranceSchema = new mongoose_1.default.Schema({
    userId: {
        type: String
    },
    firstName: { type: String },
    lastName: { type: String },
    address: { type: String },
    phone: { type: String },
    carMake: { type: String },
    carModel: { type: String },
    carYear: { type: Number },
    history: { type: String },
    package: { type: String },
    price: { type: Number },
    licenseNumber: { type: String },
    vehicleNumber: { type: String },
});
exports.InsuranceModel = mongoose_1.default.model("insurances", InsuranceSchema);
