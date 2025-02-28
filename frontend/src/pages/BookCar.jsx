import React from 'react';
import { useNavigate } from 'react-router-dom';
import carsData from '../carsData.json'; // Adjust the import path as necessary

const BookCar = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleBookNow = (carId) => {
    navigate('/booking', { state: { carId } }); // Pass the carId to the booking page
  };

  return (
    <div className="p-4 bg-gradient-to-r from-gray-500 to-gray-800 min-h-screen text-white">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Available Cars</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {carsData.map((car) => (
          <div key={car.id} className="bg-gray-700 shadow-lg rounded-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:shadow-xl">
            {/* Image container */}
            <div className="w-full h-48 sm:h-56 lg:h-64">
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-80"
              />
            </div>
            <div className="p-4 text-white text-center">
              <h2 className="text-lg sm:text-xl font-semibold">{car.name}</h2>
              <h3 className="text-gray-300 text-sm sm:text-base">{car.title}</h3>
              <p className="mt-2 text-gray-200 text-sm sm:text-base">{car.description}</p>
              <button
                onClick={() => handleBookNow(car.id)} // Pass the car ID to the handler
                className="mt-4 bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-700 transition-colors duration-300 w-full"
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookCar;
