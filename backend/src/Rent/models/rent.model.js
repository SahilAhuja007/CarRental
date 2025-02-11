import mongoose from "mongoose";
const RentalCarSchema = new mongoose.Schema({
  ownerId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Car Owner (Company/User)
  model: { type: String, required: true },
  brand: { type: String, required: true },
  plateNumber: { type: String, unique: true, required: true },
  type: { type: String, enum: ["sedan", "suv", "hatchback", "luxury"], required: true },
  seatingCapacity: { type: Number, required: true },
  fuelType: { type: String, enum: ["petrol", "diesel", "electric", "hybrid"], required: true },
  pricePerHour: { type: Number, required: true }, // Rental Pricing
  isAvailable: { type: Boolean, default: true },
  location: {
    type: { type: String, default: "Point" },
    coordinates: [Number] // [longitude, latitude] for geospatial search
  },
  images: [{ type: String }], // Array of image URLs
}, { timestamps: true });

module.exports = mongoose.model("RentalCar", RentalCarSchema);
