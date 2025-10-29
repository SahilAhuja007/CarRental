import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const BookingPage = () => {
  const { carId } = useParams();
  const navigate = useNavigate();

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [pricePerHour, setPricePerHour] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showPopup, setShowPopup] = useState(false); // ✅ Popup state

  useEffect(() => {
    if (!carId) {
      setError("Invalid car selection.");
      setLoading(false);
      return;
    }

    const fetchCarDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/car/car/${carId}`);
        setPricePerHour(response.data?.data?.pricePerHour || 0);
      } catch (error) {
        setError(error.response?.data?.message || "Failed to fetch car details");
      } finally {
        setLoading(false);
      }
    };

    fetchCarDetails();
  }, [carId]);

  const getUserIdFromToken = () => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/Logsign');
      return null;
    }
    try {
      return jwtDecode(token).id;
    } catch (error) {
      console.error("Invalid token:", error);
      navigate('/Logsign');
      return null;
    }
  };

  const calculateTimeDifference = (start, end) => {
    const startTime = new Date(start).getTime();
    const endTime = new Date(end).getTime();
    return endTime > startTime ? (endTime - startTime) / (1000 * 60 * 60) : 0;
  };

  useEffect(() => {
    if (startDate && endDate && pricePerHour > 0) {
      const totalHours = calculateTimeDifference(startDate, endDate);
      setTotalPrice(totalHours > 0 ? totalHours * pricePerHour : 0);
    } else {
      setTotalPrice(0);
    }
  }, [startDate, endDate, pricePerHour]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dealerid = getUserIdFromToken();
    if (!dealerid) return;

    if (!startDate || !endDate || totalPrice === 0) {
      alert("Invalid booking details.");
      return;
    }

    const bookingData = { carid: carId, dealerid, time: calculateTimeDifference(startDate, endDate) };

    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:8000/rent/create', bookingData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setShowPopup(true); // ✅ Show success popup
      setTimeout(() => {
        setShowPopup(false);
        navigate('/bookings'); // ✅ Redirect after success
      }, 2000);
    } catch (error) {
      alert(`Booking failed: ${error.response?.data?.message || "Something went wrong."}`);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Book Your Car</h1>

      {loading ? (
        <div className="text-center text-gray-500">Loading...</div>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
          <div className="mb-4">
            <label className="block text-gray-700">From Date</label>
            <input
              type="datetime-local"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
              className="w-full p-2 mt-1 border rounded focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">To Date</label>
            <input
              type="datetime-local"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              required
              className="w-full p-2 mt-1 border rounded focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Total Price</label>
            <p className="text-lg font-semibold">{totalPrice > 0 ? `₹${totalPrice.toFixed(2)}` : '₹0.00'}</p>
          </div>

          <button
            type="submit"
            disabled={!startDate || !endDate || totalPrice === 0}
            className={`w-full py-2 px-4 rounded 
              ${totalPrice > 0 ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-gray-400 cursor-not-allowed'}`}
          >
            Confirm Booking
          </button>
        </form>
      )}

      {/* ✅ Success Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-4 rounded-lg shadow-lg text-center">
            <h2 className="text-lg font-bold text-green-600">Booking Confirmed!</h2>
            <p className="text-gray-700">Redirecting to My Bookings...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingPage;
