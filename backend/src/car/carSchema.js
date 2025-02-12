const mongoose=require('mongoose');

const carSchema = new mongoose.Schema({
    ownerId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Car Owner (Company/User)
    model: { type: String, required: true },
    brand: { type: String, required: true },
    plateNumber: { type: String, unique: true, required: true },
    type: { type: String, enum: ["sedan", "suv", "hatchback", "luxury"], required: true },
    seatingCapacity: { type: Number, required: true },
    fuelType: { type: String, enum: ["petrol", "diesel", "electric", "hybrid"], required: true },
    pricePerHour: { type: Number, required: true }, 
    isAvailable: { type: Boolean, default: true },
    location: {
      type: { type: String, default: "Point" },
      coordinates: [Number] 
    },
    images: [{ type: String }], 
}, { timestamps: true });
  
module.exports = mongoose.model("Car", carSchema);
  