import React, { useState, useEffect } from "react";

const Profile = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "+91-9876543210",
  });

  const [editMode, setEditMode] = useState(false);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-700 to-gray-900 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-gray-800 shadow-lg rounded-2xl p-6 text-white">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6">
          Profile 👤
        </h1>

        {editMode ? (
          <div className="space-y-4">
            <div>
              <label className="block text-gray-300 mb-1">Name:</label>
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
                className="w-full p-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-1">Email:</label>
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                className="w-full p-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-1">Phone:</label>
              <input
                type="text"
                name="phone"
                value={user.phone}
                onChange={handleChange}
                className="w-full p-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
              />
            </div>

            <button
              className="w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-500 transition duration-300"
              onClick={() => setEditMode(false)}
            >
              Save ✅
            </button>
          </div>
        ) : (
          <div className="space-y-4 text-center">
            <p className="text-lg font-medium">
              <span className="text-gray-400">Name:</span> {user.name}
            </p>
            <p className="text-lg font-medium">
              <span className="text-gray-400">Email:</span> {user.email}
            </p>
            <p className="text-lg font-medium">
              <span className="text-gray-400">Phone:</span> {user.phone}
            </p>

            <button
              className="w-full bg-blue-600 text-white py-3 rounded-xl mt-4 hover:bg-blue-500 transition duration-300"
              onClick={() => setEditMode(true)}
            >
              Edit Profile ✏️
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
