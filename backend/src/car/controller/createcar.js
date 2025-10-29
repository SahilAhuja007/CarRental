const Car = require("../carSchema");
const User = require("../../User/models/user.model");
const { cloudinary } = require("../../cloudinary/cloudinary");

exports.createcar = async (req, res) => {
  try {
    console.log("req.body:", req.body);
    console.log("req.files:", req.files);

    const user = req.user; // Assume JWT middleware sets req.user
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "User not found" });
    }

    const {
      model,
      brand,
      plateNumber,
      type,
      seatingCapacity,
      fuelType,
      pricePerHour,
      location,
    } = req.body;

    // Check required fields
    if (
      !model ||
      !brand ||
      !plateNumber ||
      !type ||
      !seatingCapacity ||
      !fuelType ||
      !pricePerHour ||
      !location
    ) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    // Validate Car Number
    const regex = /^[A-Z]{2}[0-9]{2}[A-Z]{1,2}[0-9]{4}$/;
    if (!regex.test(plateNumber)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid car plate number" });
    }

    // Handle image upload
    if (!req.files || !req.files.images) {
      return res
        .status(400)
        .json({ success: false, message: "Car image is required" });
    }

    const imageFile = req.files.images;

    const uploadedImage = await cloudinary.uploader.upload(
      imageFile.tempFilePath,
      {
        folder: "carImages", // Optional folder in Cloudinary
      }
    );

    // Create Car
    const car = await Car.create({
      ownerId: user._id,
      model,
      brand,
      plateNumber,
      type,
      seatingCapacity,
      fuelType,
      pricePerHour,
      location,
      images: uploadedImage.secure_url, // store Cloudinary URL
      isAvailable: true,
    });

    res.status(201).json({
      success: true,
      message: "Car added successfully",
      data: car,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error creating car",
      error: error.message,
    });
  }
};

//correct it
exports.updatecar = async (req, res) => {
  try {
    const {
      _id,
      ownerId,
      model,
      brand,
      plateNumber,
      type,
      seatingCapacity,
      fuelType,
      pricePerHour,
      isAvailable,
      location,
      images,
    } = req.body;

    // Check if all required fields are provided
    if (
      !(
        _id &&
        ownerId &&
        model &&
        brand &&
        plateNumber &&
        type &&
        seatingCapacity &&
        fuelType &&
        pricePerHour &&
        isAvailable !== undefined &&
        location &&
        images
      )
    ) {
      return res.status(400).json({
        success: false,
        message:
          "All fields are required: _id, ownerId, model, brand, plateNumber, type, seatingCapacity, fuelType, pricePerHour, isAvailable, location, images.",
      });
    }

    // Check if user (owner) exists
    const user = await User.findById(ownerId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Owner does not exist.",
      });
    }

    // Validate Car Plate Number Format
    function validateCarNumber(carNumber) {
      const regex = /^[A-Z]{2}[0-9]{2}[A-Z]{1,2}[0-9]{4}$/;
      return regex.test(carNumber);
    }
    if (!validateCarNumber(plateNumber)) {
      return res.status(400).json({
        success: false,
        message: "Invalid car plate number format. Expected format: XX00XX0000",
      });
    }

    // Update the car details
    const updatedCar = await Car.findByIdAndUpdate(_id, req.body, {
      new: true,
    });

    if (!updatedCar) {
      return res.status(404).json({
        success: false,
        message: "Car not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Car details updated successfully.",
      data: updatedCar,
    });
  } catch (error) {
    console.error("Error updating car:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred while updating the car.",
      error: error.message,
    });
  }
};

//correct it
exports.deletecar = async (req, res) => {
  try {
    const { _id } = req.body;
    if (!_id) {
      return res.status(401).json({
        success: false,
        data: "id is necessaary",
      });
    }
    const car = await Car.findByIdAndDelete(_id);
    res.status(200).json({
      success: true,
      data: car,
      message: "car deleted successfully",
    });
    const user = await User.findById(ownerid);
    if (!user) {
      return res.status(401).json({
        success: false,
        data: "user does not exist",
      });
    }
    function validateCarNumber(carNumber) {
      const regex = /^[A-Z]{2}[0-9]{2}[A-Z]{1,2}[0-9]{4}$/;
      return regex.test(carNumber);
    }
    if (!validateCarNumber(plateNumber)) {
      return res.status(401).json({
        success: false,
        data: "car number is incorrect",
      });
    }
  } catch (e) {
    res.status(500).json({
      success: true,
      data: car,
      message: "issue while deleting car",
    });
  }
};
