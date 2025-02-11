import mongoose from 'mongoose';

const DriverSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    carId: { type: mongoose.Schema.Types.ObjectId, ref: "Car", required: true },
    licenseNumber: { type: String, unique: true, required: true },
    isAvailable: { type: Boolean, default: true },
  }, { timestamps: true });
  
  
  module.exports = mongoose.model("Driver", DriverSchema);
  