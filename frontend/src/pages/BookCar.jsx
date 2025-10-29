import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BookCar = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:8000/car/cars", {
          headers: {
            Authorization: `Bearer ${token}`, // ✅ attach JWT here
          },
        });

        console.log(
          "Fetched Cars Data:",
          JSON.stringify(response.data, null, 2)
        );

        if (response.data.success && Array.isArray(response.data.data)) {
          setCars(response.data.data);
        } else {
          setError(response.data.message || "No cars found");
        }
      } catch (err) {
        setError(err.message || "Error fetching cars");
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  const handleBookNow = (carId) => {
    if (!carId) {
      console.error("Invalid carId:", carId); // 🔴 Log issue
      return;
    }
    navigate(`/booking/${carId}`);
  };

  if (loading)
    return (
      <p className="text-center text-white text-lg mt-20">🚗 Loading cars...</p>
    );

  if (error)
    return <p className="text-center text-red-500 text-lg mt-20">❌ {error}</p>;

  return (
    <div className="min-h-screen bg-gray-900 text-white py-10 px-4">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8">
        Available Cars
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {cars.map((car, index) => {
          console.log(`Car ${index}:`, car); // 🛠️ Debug each car object

          return (
            <div
              key={car._id || car.id || index} // 🔄 Ensure valid key
              className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {/* Image Section */}
              <div className="w-full h-52 sm:h-64 bg-gray-700">
                <img
                  src={car.images?.[0] || "https://via.placeholder.com/300"}
                  alt={car.model || "Car"}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Car Details */}
              <div className="p-5 text-center">
                <h2 className="text-xl sm:text-2xl font-semibold">
                  {car.model}{" "}
                  <span className="text-gray-400">({car.brand})</span>
                </h2>
                <p className="text-gray-400 text-sm sm:text-base mt-1">
                  {car.type} | {car.seatingCapacity} Seats | {car.fuelType}
                </p>
                <p className="text-gray-200 text-lg sm:text-xl font-bold mt-2">
                  ₹{car.pricePerHour}/hour
                </p>

                {/* Book Now Button */}
                <button
                  onClick={() => handleBookNow(car._id || car.id)} // 🔄 Use correct car ID
                  className="mt-4 bg-blue-600 hover:bg-blue-500 text-white py-2 px-5 rounded-lg transition-colors duration-300 w-full text-lg font-medium"
                >
                  Book Now
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BookCar;
