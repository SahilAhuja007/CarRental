const mongoose = require("mongoose");

const carSchema = new mongoose.Schema(
  {
    ownerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true, // The car must belong to a user or company
    },
    model: {
      type: String,
      required: true,
      trim: true,
    },
    brand: {
      type: String,
      required: true,
      trim: true,
    },
    plateNumber: {
      type: String,
      unique: true,
      required: true,
      uppercase: true, // Ensures all plates are stored in uppercase
      trim: true,
    },
    type: {
      type: String,
      enum: ["sedan", "suv", "hatchback", "luxury"],
      required: true,
    },
    seatingCapacity: {
      type: Number,
      required: true,
      min: 2,
    },
    fuelType: {
      type: String,
      enum: ["petrol", "diesel", "electric", "hybrid"],
      required: true,
    },
    pricePerHour: {
      type: Number,
      required: true,
      min: 0,
    },
    isAvailable: {
      type: Boolean,
      default: true,
    },
    location: {
      type: {
        type: String,
        enum: ["Point"],
        default: "Point",
      },
      coordinates: {
        type: [Number],
        default: [0, 0], // [longitude, latitude]
      },
    },
    images: [
      {
        type: String, // Store image URLs or file paths
      },
    ],
  },
  { timestamps: true }
);

// ✅ To support geospatial queries (like nearby cars)
carSchema.index({ location: "2dsphere" });

module.exports = mongoose.model("Car", carSchema);
