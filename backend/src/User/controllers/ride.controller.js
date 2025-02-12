// controllers/ride.controller.js

const Ride = require("../../Ride/models/ride.model"); // Import Ride model
const User = require("../models/user.model"); // Import User model
const Driver = require("../../driver/models/driver.model"); // Import Driver model
const driverModel = require("../../driver/models/driver.model");

// Book Ride function
const bookRide = async (req, res) => {
    try {
        const { userId, driverId, pickupLocation, dropLocation, fare } = req.body;

        if (!userId || !driverId || !pickupLocation || !dropLocation || !fare) {
            return res.status(400).json({ message: "All fields are required" });
        }

        console.log("userId, driverId, pickupLocation, dropLocation, fare", req.body);

        // Check if the user exists
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Check if the driver exists
        const availableDriver = await Driver.findById(driverId);
        if (!availableDriver) {
            return res.status(404).json({ message: "Driver not found" });
        }

        console.log("available driver", availableDriver);

        // Check if the driver is available
        if (!availableDriver.isAvailable) {
            return res.status(400).json({ message: "Driver is not available at the moment" });
        }

        // Create a new ride
        const ride = await Ride.create({
            userId,
            driverId: availableDriver._id,
            carId, // Ensure that carId is included in the request body or handled in the code
            pickupLocation,
            dropLocation,
            fare,
            status: "pending",
        });

        // Set driver availability to false
        availableDriver.isAvailable = false;
        await availableDriver.save();

        return res.status(201).json({ message: "Ride booked successfully", ride });
    } catch (error) {
        console.error("Error booking ride:", error);
        return res.status(500).json({ message: "Server error" });
    }
};



// Cancel Ride function
const cancelRide = async (req, res) => {
    try {
        const { rideId, userId, driverId } = req.body;
        if (!driverId || !userId || !rideId) {
            return res.status(401).json({ message: "Sorry, can't cancel your ride" });
        }
        const ride = await Ride.findOne({ _id: rideId });
        if (!ride) {
            return res.status(401).json({ message: "No ride found" });
        }
        const cancel = await Ride.updateOne({ _id: ride._id }, { $set: { status: 'cancelled' } });
        if (!cancel) {
            return res.status(403).json({
                message: "Didn't cancel ride",
            });
        }
        return res.status(200).json({
            message: "Canceled ride",
            cancel,
        });
    } catch (error) {
        console.log("Error occurred", error);
        return res.status(500).json({
            message: "Something went wrong",
        });
    }
};

// Export both functions together in one object
module.exports = { bookRide, cancelRide };
