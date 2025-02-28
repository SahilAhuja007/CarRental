import React, { useState } from 'react';

const Blah = () => {
  // State to manage the list of rides
  const [rides, setRides] = useState([
    {
      id: 1,
      from: 'Delhi',
      to: 'Jaipur',
      date: '2023-10-25',
      driver: 'John Doe',
      seats: 3,
      price: 500,
    },
    {
      id: 2,
      from: 'Mumbai',
      to: 'Pune',
      date: '2023-10-26',
      driver: 'Jane Smith',
      seats: 2,
      price: 400,
    },
    {
      id: 3,
      from: 'Bangalore',
      to: 'Chennai',
      date: '2023-10-27',
      driver: 'Alice Johnson',
      seats: 4,
      price: 600,
    },
  ]);

  // State to manage the form inputs for posting a new ride
  const [newRide, setNewRide] = useState({
    from: '',
    to: '',
    date: '',
    seats: '',
    price: '',
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRide({
      ...newRide,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new ride object
    const ride = {
      id: rides.length + 1, // Generate a unique ID
      from: newRide.from,
      to: newRide.to,
      date: newRide.date,
      driver: 'You', // Default driver name (can be dynamic)
      seats: newRide.seats,
      price: newRide.price,
    };

    // Add the new ride to the list
    setRides([...rides, ride]);

    // Clear the form
    setNewRide({
      from: '',
      to: '',
      date: '',
      seats: '',
      price: '',
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-500 to-gray-800 text-white py-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Find or Offer Rides</h1>
        <p className="text-lg">Travel smarter, save money, and make new friends!</p>
      </div>

      {/* Search Bar */}
      <div className="container mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
        <form className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <input
            type="text"
            placeholder="From"
            className="p-2 border rounded-lg flex-1"
          />
          <input
            type="text"
            placeholder="To"
            className="p-2 border rounded-lg flex-1"
          />
          <input
            type="date"
            className="p-2 border rounded-lg"
          />
          <button
            type="submit"
            className="bg-gray-600 text-white p-2 rounded-lg hover:bg-gray-700"
          >
            Search Rides
          </button>
        </form>
      </div>

      {/* Ride Listings */}
      <div className="container mx-auto mt-8">
        <h2 className="text-2xl font-bold mb-4">Available Rides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rides.map((ride) => (
            <div key={ride.id} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold">{ride.from} → {ride.to}</h3>
              <p className="text-gray-600 mt-2">Driver: {ride.driver}</p>
              <p className="text-gray-600">Date: {ride.date}</p>
              <p className="text-gray-600">Seats: {ride.seats}</p>
              <p className="text-gray-600">Price: ₹{ride.price}</p>
              <button className="mt-4 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700">
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Post a Ride Section */}
      <div className="container mx-auto mt-8 p-6 bg-white rounded-lg shadow-md w-[500px]">
        <h2 className="text-2xl font-bold mb-4 text-center">Post a Ride</h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4 items-center">
          <input
            type="text"
            name="from"
            placeholder="From"
            value={newRide.from}
            onChange={handleInputChange}
            className="p-2 border rounded-lg text-sm w-3/4 text-left"
            required
          />
          <input
            type="text"
            name="to"
            placeholder="To"
            value={newRide.to}
            onChange={handleInputChange}
            className="p-2 border rounded-lg w-3/4"
            required
          />
          <input
            type="date"
            name="date"
            value={newRide.date}
            onChange={handleInputChange}
            className="p-2 border rounded-lg w-3/4"
            required
          />
          <input
            type="number"
            name="seats"
            placeholder="Seats Available"
            value={newRide.seats}
            onChange={handleInputChange}
            className="p-2 border rounded-lg w-3/4"
            required
          />
          <input
            type="number"
            name="price"
            placeholder="Price per Seat"
            value={newRide.price}
            onChange={handleInputChange}
            className="p-2 border rounded-lg w-3/4"
            required
          />
          <button
            type="submit"
            className="bg-gray-500 text-white p-2 rounded-lg hover:bg-gray-700 w-3/4"
          >
            Post Ride
          </button>
        </form>
      </div>

    </div>
  );
};

export default Blah;