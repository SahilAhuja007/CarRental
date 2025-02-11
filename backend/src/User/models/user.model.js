import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    phone: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["user", "driver"], default: "user" },
    currentLocation: {
        type: { type: String, default: "Point" },
        coordinates: [Number] // [longitude, latitude]
    },
}, { timestamps: true });


module.exports = mongoose.model("User", UserSchema);