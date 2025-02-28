import React, { useState } from 'react';

const Driver = () => {
  // State to manage availability status
  const [isAvailable, setIsAvailable] = useState(false);

  // Function to toggle availability
  const toggleAvailability = () => {
    setIsAvailable((prev) => !prev);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-sm sm:max-w-md md:max-w-lg">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">Driver Dashboard</h2>

        <div className="space-y-6">
          {/* Profile Section */}
          <div className="p-4 bg-gray-50 rounded-md shadow-sm">
            <h3 className="text-lg font-semibold text-gray-700">Profile</h3>
            <p className="text-gray-600">Manage your profile details.</p>
            <button className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
              Edit Profile
            </button>
          </div>

          {/* Booking Section */}
          <div className="p-4 bg-gray-50 rounded-md shadow-sm">
            <h3 className="text-lg font-semibold text-gray-700">Bookings</h3>
            <p className="text-gray-600">View and manage your bookings.</p>
            <button className="mt-4 w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300">
              View Bookings
            </button>
          </div>

          {/* Availability Section */}
          <div className="p-4 bg-gray-50 rounded-md shadow-sm">
            <h3 className="text-lg font-semibold text-gray-700">Availability</h3>
            <p className="text-gray-600">Current Status: {isAvailable ? 'Available' : 'Unavailable'}</p>
            <button
              onClick={toggleAvailability}
              className={`mt-4 w-full py-2 px-4 rounded-md transition duration-300 ${isAvailable ? 'bg-yellow-500 text-white hover:bg-yellow-600' : 'bg-gray-400 text-white hover:bg-gray-500'
                }`}
            >
              {isAvailable ? 'Deactivate Availability' : 'Activate Availability'}
            </button>
          </div>

          {/* Logout Button */}
          <button className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-300">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Driver;
