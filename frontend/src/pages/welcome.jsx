import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Welcome = () => {
  const location = useLocation();
  const userName = location.state?.name || 'User'; // Get name from state
  const navigate = useNavigate();

  // Functions to handle navigation to booking and selling pages
  const handleBookCar = () => {
    navigate('/book-car'); // Update with the correct route for booking
  };

  const handleSellCar = () => {
    navigate('/sell-car'); // Navigate to the SellCar page
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-lg w-full max-w-md text-center">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4">Welcome, {userName}!</h1>
        <p className="text-gray-700 mb-6 text-sm sm:text-base">You have successfully logged in.</p>

        {/* Buttons for Book Car and Sell Car */}
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
          <button
            onClick={handleBookCar}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
          >
            Book Your Car
          </button>
          <button
            onClick={handleSellCar}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none"
          >
            Sell Your Car For Rent
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
