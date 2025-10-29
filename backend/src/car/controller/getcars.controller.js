const Car = require("../carSchema");

exports.getAllCars = async (req, res) => {
  try {
    const cars = await Car.find({});
    console.log("cars:- ", cars);

    res.status(200).json({
      success: true,
      data: cars,
      message: "cars fetched successfully",
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      data: e.message,
      message: "issue while fetching cars",
    });
  }
};
exports.getCar = async (req, res) => {
  try {
    const { id } = req.params; // Extract ID from URL params

    if (!id || id.length !== 24) {
      // Ensure ID is valid
      return res.status(400).json({
        success: false,
        message: "Invalid Car ID",
      });
    }

    const car = await Car.findById(id.trim());
    if (!car) {
      return res.status(404).json({
        success: false,
        message: "Car not found",
      });
    }

    res.status(200).json({
      success: true,
      data: car,
      message: "Car fetched successfully",
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: "Issue while fetching car",
      error: e.message,
    });
  }
};
