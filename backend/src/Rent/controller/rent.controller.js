const Rent = require("../models/rent.model");
const Car = require("../../car/carSchema");
const User = require("../../User/models/user.model");

exports.createrent = async (req, res) => {
    try {
        const { carid, dealerid, time } = req.body;

        // ✅ Validate required fields
        if (!carid || !dealerid || !time) {
            return res.status(400).json({
                success: false,
                message: "All fields are required: carid, dealerid, time."
            });
        }

        // ✅ Check if car exists
        const car = await Car.findById(carid);
        if (!car) {
            return res.status(404).json({
                success: false,
                message: "Car not found."
            });
        }

        // ✅ Check if dealer (user) exists
        const user = await User.findById(dealerid);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "Dealer (User) not found."
            });
        }

        // ✅ Compute total amount
        const duration = parseFloat(time); // Ensure it's a number
        const totalamount = duration * car.pricePerHour;

        // ✅ Create rent
        const rent = await Rent.create({
            car: carid,
            owner: car.ownerId,
            dealer: dealerid,
            duration,
            totalamount
        });

        return res.status(201).json({
            success: true,
            data: rent,
            message: "Rent created successfully."
        });

    } catch (error) {
        console.error("Error creating rent:", error);
        return res.status(500).json({
            success: false,
            message: "An error occurred while creating rent.",
            error: error.message
        });
    }
};


exports.cancelerent = async (req, res) => {
    try {
        const { _id } = req.body;

        if (!_id) {
            return res.status(400).json({
                success: false,
                message: "Rent ID is required."
            });
        }

        const rent = await Rent.findByIdAndDelete(_id);

        if (!rent) {
            return res.status(404).json({
                success: false,
                message: "No rent found with the given ID."
            });
        }

        return res.status(200).json({
            success: true,
            data: rent,
            message: "Rent deleted successfully."
        });

    } catch (error) {
        console.error("Error canceling rent:", error);
        return res.status(500).json({
            success: false,
            message: "Issue while deleting rent.",
            error: error.message
        });
    }
};

exports.updaterent = async (req, res) => {
    try {
        const { rentId, carid, dealerid, updatedTime } = req.body;

        if (!rentId || !carid || !dealerid || !updatedTime) {
            return res.status(400).json({
                success: false,
                message: "Please provide rentId, carid, dealerid, and updatedTime."
            });
        }

        // Check if rent exists
        const rent = await Rent.findById(rentId);
        if (!rent) {
            return res.status(404).json({
                success: false,
                message: "Rent record not found."
            });
        }

        // Check if car exists
        const car = await Car.findById(carid);
        if (!car) {
            return res.status(404).json({
                success: false,
                message: "Car not found."
            });
        }

        // Check if dealer (user) exists
        const user = await User.findById(dealerid);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "Dealer (User) not found."
            });
        }

        // Calculate new total amount
        const totalamount = parseInt(updatedTime) * car.pricePerHour;

        // Update rent record
        rent.car = carid;
        rent.dealer = dealerid;
        rent.duration = updatedTime;
        rent.totalamount = totalamount;

        await rent.save();

        return res.status(200).json({
            success: true,
            data: rent,
            message: "Rent updated successfully."
        });

    } catch (error) {
        console.error("Error updating rent:", error);
        return res.status(500).json({
            success: false,
            message: "Issue while updating rent.",
            error: error.message
        });
    }
};

exports.getMyRents=async(req,res)=>{
    const {userId}=req.body;

}

exports.getAllRents=async(req,res)=>{

}