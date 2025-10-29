import React, { useState } from "react";

const Bookings = () => {
  const [bookings, setBookings] = useState([
    {
      id: 1,
      car: "Tesla Model S",
      date: "2025-03-15",
      time: "10:00 AM",
      location: "Mumbai, India",
      price: "$150/day",
    },
    {
      id: 2,
      car: "Lamborghini Huracan",
      date: "2025-03-18",
      time: "2:00 PM",
      location: "Delhi, India",
      price: "$400/day",
    },
    {
      id: 3,
      car: "BMW M5",
      date: "2025-03-20",
      time: "12:30 PM",
      location: "Bangalore, India",
      price: "$200/day",
    },
  ]);

  const [editBooking, setEditBooking] = useState(null); // Track booking to edit

  // Function to cancel booking
  const handleCancelBooking = (id) => {
    setBookings(bookings.filter((booking) => booking.id !== id));
  };

  // Function to open the edit modal
  const handleEditBooking = (booking) => {
    setEditBooking(booking);
  };

  // Function to save the updated booking
  const handleSaveBooking = () => {
    setBookings(
      bookings.map((b) => (b.id === editBooking.id ? editBooking : b))
    );
    setEditBooking(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-700 to-gray-900 p-6 flex items-center justify-center">
      <div className="w-full max-w-4xl bg-gray-800 shadow-lg rounded-2xl p-6 text-white">
        <h1 className="text-3xl font-bold text-center mb-6">📅 My Bookings</h1>

        {bookings.length > 0 ? (
          <div className="space-y-4">
            {bookings.map((booking) => (
              <div
                key={booking.id}
                className="bg-gray-700 p-4 rounded-xl shadow-md flex justify-between items-center"
              >
                <div>
                  <h2 className="text-xl font-semibold">{booking.car} 🚗</h2>
                  <p className="text-gray-300">📍 {booking.location}</p>
                  <p className="text-gray-300">
                    📆 {booking.date} | ⏰ {booking.time}
                  </p>
                  <p className="text-orange-400 font-semibold">
                    {booking.price}
                  </p>
                </div>
                <div className="space-x-2">
                  <button
                    onClick={() => handleEditBooking(booking)}
                    className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition duration-300"
                  >
                    Edit 📝
                  </button>
                  <button
                    onClick={() => handleCancelBooking(booking.id)}
                    className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-500 transition duration-300"
                  >
                    Cancel ❌
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-300 text-lg">
            No bookings found. Book a car now! 🚘
          </p>
        )}
      </div>

      {/* Edit Booking Modal */}
      {editBooking && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-bold mb-4 text-white">Edit Booking</h2>

            <label className="block text-white mb-2">📆 Date:</label>
            <input
              type="date"
              value={editBooking.date}
              onChange={(e) =>
                setEditBooking({ ...editBooking, date: e.target.value })
              }
              className="w-full p-2 rounded bg-gray-700 mb-4 text-white"
            />

            <label className="block text-white mb-2">⏰ Time:</label>
            <input
              type="time"
              value={editBooking.time}
              onChange={(e) =>
                setEditBooking({ ...editBooking, time: e.target.value })
              }
              className="w-full p-2 rounded bg-gray-700 mb-4 text-white"
            />

            <label className="block text-white mb-2">📍 Location:</label>
            <input
              type="text"
              value={editBooking.location}
              onChange={(e) =>
                setEditBooking({ ...editBooking, location: e.target.value })
              }
              className="w-full p-2 rounded bg-gray-700 mb-4 text-white"
            />

            <div className="flex justify-between">
              <button
                onClick={() => setEditBooking(null)}
                className="bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-500 transition duration-300"
              >
                Cancel ❌
              </button>
              <button
                onClick={handleSaveBooking}
                className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-500 transition duration-300"
              >
                Save ✅
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Bookings;
