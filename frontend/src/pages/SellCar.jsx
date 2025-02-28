import React, { useState } from "react";

const SellCar = () => {
  const [carDetails, setCarDetails] = useState({
    carName: "",
    description: "",
    year: "",
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handlePhotoChange = (e) => {
    setCarDetails((prevDetails) => ({
      ...prevDetails,
      photo: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const carData = {
      ...carDetails,
      photo: carDetails.photo ? carDetails.photo.name : null,
    };

    const existingCars = JSON.parse(localStorage.getItem("cars")) || [];
    localStorage.setItem("cars", JSON.stringify([...existingCars, carData]));

    alert("Car registered successfully!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-500 to-gray-800 p-6">
      <div className="bg-white bg-opacity-20 backdrop-blur-lg p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-semibold text-white text-center mb-6">
          Register Your Car for Rent
        </h2>
        {/* model, brand, priceperhour,platenumber,seatingcapacity,fueltype,location,images,type(sedan,suv,hatchback,luxury) */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-white">Car Model</label>
            <input
              type="text"
              name="carName"
              value={carDetails.carName}
              onChange={handleChange}
              required
              className="w-full p-3 mt-1 bg-white bg-opacity-30 text-white placeholder-gray-200 border-none rounded focus:ring-2 focus:ring-blue-300"
              placeholder="Enter car name"
            />
          </div>

          <div>
            <label className="text-white">Description</label>
            <textarea
              name="description"
              value={carDetails.description}
              onChange={handleChange}
              required
              className="w-full p-3 mt-1 bg-white bg-opacity-30 text-white placeholder-gray-200 border-none rounded focus:ring-2 focus:ring-blue-300"
              placeholder="Describe your car"
            />
          </div>

          <div>
            <label className="text-white">Year of Buying</label>
            <input
              type="number"
              name="year"
              value={carDetails.year}
              onChange={handleChange}
              required
              className="w-full p-3 mt-1 bg-white bg-opacity-30 text-white placeholder-gray-200 border-none rounded focus:ring-2 focus:ring-blue-300"
              placeholder="Enter year"
            />
          </div>

          <div>
            <label className="text-white">Car Photo</label>
            <input
              type="file"
              onChange={handlePhotoChange}
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
