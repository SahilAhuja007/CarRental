const mongoose = require('mongoose');

const RideSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    driverId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    // carId: { type: mongoose.Schema.Types.ObjectId, ref: "Car", required: true },
    pickupLocation: {
      type: { type: String, default: "Point" },
      coordinates: [Number]
    },
    dropLocation: {
      type: { type: String, default: "Point" },
      coordinates: [Number]
    },
    fare: { type: Number, required: true },
    status: { type: String, enum: ["pending", "accepted", "ongoing", "completed", "cancelled"], default: "pending" },
    paymentStatus: { type: String, enum: ["pending", "paid"], default: "pending" },
  }, { timestamps: true });
  
  module.exports = mongoose.model("Ride", RideSchema);
  