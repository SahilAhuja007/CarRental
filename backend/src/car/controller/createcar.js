const Car = require("../carSchema");
const User = require("../../User/models/user.model");

exports.createcar = async (req, res) => {
  try {
    const {
      ownerid,
      model,
      brand,
      plateNumber,
      type,
      seatingcapacity,
      fuelType,
      priceperhour,
      isavailable,
      location,
      images,
    } = req.body;
    if (
      !ownerid ||
      !model ||
      !brand ||
      !plateNumber ||
      !type ||
      !seatingcapacity ||
      !fuelType ||
      !priceperhour ||
      !isavailable ||
      !location ||
      !images
    ) {
      return res.status(401).json({
        success: false,
        data: "required all the fields",
      });
    }
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
    console.log(
      "data",
      ownerid,
      model,
      brand,
      plateNumber,
      type,
      seatingcapacity,
      fuelType,
      priceperhour,
      isavailable,
      location,
      images
    );

    const car = await Car.create({
      ownerId: ownerid,
      model,
      brand,
      plateNumber,
      type,
      seatingCapacity: seatingcapacity,
      fuelType,
      pricePerHour: priceperhour,
      isAvailable: isavailable,
      location,
      images,
    });
    console.log("car", car);
    res.status(200).json({
      success: true,
      data: car,
      message: "car added successfully",
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      data: e.message,
      message: "issue while creating a car",
    });
  }
};
