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
//correct it 
exports.updatecar = async (req, res) => {
  try {
    const { 
      _id, ownerId, model, brand, plateNumber, type, seatingCapacity, 
      fuelType, pricePerHour, isAvailable, location, images 
    } = req.body;

    // Check if all required fields are provided
    if (!(_id && ownerId && model && brand && plateNumber && type && seatingCapacity && 
          fuelType && pricePerHour && isAvailable !== undefined && location && images)) {
      return res.status(400).json({
        success: false,
        message: "All fields are required: _id, ownerId, model, brand, plateNumber, type, seatingCapacity, fuelType, pricePerHour, isAvailable, location, images."
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
    const updatedCar = await Car.findByIdAndUpdate(_id, req.body, { new: true });
    
    if (!updatedCar) {
      return res.status(404).json({
        success: false,
        message: "Car not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Car details updated successfully.",
      data: updatedCar
    });
    
  } catch (error) {
    console.error("Error updating car:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred while updating the car.",
      error: error.message
    });
  }
};

//correct it 
exports.deletecar=async(req,res)=>{
  try{
    const {_id}=req.body;
    if(!_id){
      return res.status(401)
      .json({
        success:false,
        data:"id is necessaary"
      })
    }
    const car=await Car.findByIdAndDelete(_id);
    res.status(200)
    .json({
      success:true,
      data:car,
      message:"car deleted successfully"
    })
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
  }catch(e){
    res.status(500)
    .json({
      success:true,
      data:car,
      message:"issue while deleting car"
    })
  }
}
