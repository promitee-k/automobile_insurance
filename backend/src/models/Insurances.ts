import mongoose from "mongoose";

const InsuranceSchema = new mongoose.Schema({
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

export const InsuranceModel = mongoose.model("insurances", InsuranceSchema);
