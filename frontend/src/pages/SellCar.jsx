import React, { useState } from "react";
import axios from "axios";

const SellCar = () => {
  const [carDetails, setCarDetails] = useState({
    model: "",
    brand: "",
    plateNumber: "",
    type: "",
    seatingCapacity: "",
    fuelType: "",
    pricePerHour: "",
    location: "",
    images: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleimagesChange = (e) => {
    setCarDetails((prev) => ({
      ...prev,
      images: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      console.log("cardetail:-" + carDetails);
      for (const key in carDetails) {
        formData.append(key, carDetails[key]);
      }
      console.log("formdata:- ", formData);

      // ✅ Example: Send JWT token in Authorization header
      const token = localStorage.getItem("token");
      console.log("formdata:- ", formData);

      const response = await axios.post(
        "http://localhost:8000/car/createCar",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`, // ✅ attach JWT here
          },
        }
      );

      alert("Car registered successfully!");
      console.log(response.data);
    } catch (error) {
      console.error(error);
      alert("Error registering car. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-500 to-gray-800 p-6">
      <div className="bg-white bg-opacity-20 backdrop-blur-lg p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-semibold text-white text-center mb-6">
          Register Your Car for Rent
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-white">Car Model</label>
            <input
              type="text"
              name="model"
              value={carDetails.model}
              onChange={handleChange}
              required
              className="w-full p-3 mt-1 bg-white bg-opacity-30 text-white placeholder-gray-200 rounded focus:ring-2 focus:ring-blue-300"
              placeholder="Enter car model"
            />
          </div>

          <div>
            <label className="text-white">Brand</label>
            <input
              type="text"
              name="brand"
              value={carDetails.brand}
              onChange={handleChange}
              required
              className="w-full p-3 mt-1 bg-white bg-opacity-30 text-white placeholder-gray-200 rounded focus:ring-2 focus:ring-blue-300"
              placeholder="Enter brand name"
            />
          </div>

          <div>
            <label className="text-white">Plate Number</label>
            <input
              type="text"
              name="plateNumber"
              value={carDetails.plateNumber}
              onChange={handleChange}
              required
              className="w-full p-3 mt-1 bg-white bg-opacity-30 text-white placeholder-gray-200 rounded focus:ring-2 focus:ring-blue-300"
              placeholder="Enter plate number"
            />
          </div>

          <div>
            <label className="text-white">Car Type</label>
            <select
              name="type"
              value={carDetails.type}
              onChange={handleChange}
              required
              className="w-full p-3 mt-1 bg-white bg-opacity-30 text-white rounded focus:ring-2 focus:ring-blue-300"
            >
              <option value="">Select Type</option>
              <option value="sedan">Sedan</option>
              <option value="suv">SUV</option>
              <option value="hatchback">Hatchback</option>
              <option value="luxury">Luxury</option>
            </select>
          </div>

          <div>
            <label className="text-white">Seating Capacity</label>
            <input
              type="number"
              name="seatingCapacity"
              value={carDetails.seatingCapacity}
              onChange={handleChange}
              required
              className="w-full p-3 mt-1 bg-white bg-opacity-30 text-white placeholder-gray-200 rounded focus:ring-2 focus:ring-blue-300"
              placeholder="Enter seating capacity"
            />
          </div>

          <div>
            <label className="text-white">Fuel Type</label>
            <select
              name="fuelType"
              value={carDetails.fuelType}
              onChange={handleChange}
              required
              className="w-full p-3 mt-1 bg-white bg-opacity-30 text-white rounded focus:ring-2 focus:ring-blue-300"
            >
              <option value="">Select Fuel Type</option>
              <option value="petrol">Petrol</option>
              <option value="diesel">Diesel</option>
              <option value="electric">Electric</option>
              <option value="hybrid">Hybrid</option>
            </select>
          </div>

          <div>
            <label className="text-white">Price Per Hour (₹)</label>
            <input
              type="number"
              name="pricePerHour"
              value={carDetails.pricePerHour}
              onChange={handleChange}
              required
              className="w-full p-3 mt-1 bg-white bg-opacity-30 text-white placeholder-gray-200 rounded focus:ring-2 focus:ring-blue-300"
              placeholder="Enter price per hour"
            />
          </div>

          <div>
            <label className="text-white">Location</label>
            <input
              type="text"
              name="location"
              value={carDetails.location}
              onChange={handleChange}
              required
              className="w-full p-3 mt-1 bg-white bg-opacity-30 text-white placeholder-gray-200 rounded focus:ring-2 focus:ring-blue-300"
              placeholder="Enter car location"
            />
          </div>

          <div>
            <label className="text-white">Car images</label>
            <input
              type="file"
              onChange={handleimagesChange}
              required
              className="w-full mt-2 text-white file:bg-blue-500 file:border-none file:rounded-lg file:px-4 file:py-2 file:text-white file:hover:bg-blue-600 transition cursor-pointer"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 font-semibold"
          >
            Register Car
          </button>
        </form>
      </div>
    </div>
  );
};

export default SellCar;
