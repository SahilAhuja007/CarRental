import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar'; // Adjust the import path as necessary
import Footer from './components/Footer'; // Adjust the import path as necessary
import Home from './pages/Home'; // Import Home page
import About from './pages/About'; // Import About page
import Contact from './pages/Contact'; // Import Contact page
import Blah from './pages/Blah'; // CarPool page
import LogSign from './pages/Logsign'; // Login/Signup page
import Welcome from './pages/welcome';
import SellCar from './pages/SellCar';
import BookCar from './pages/BookCar';
import BookingPage from './components/BookingPage'; // Booking page
import Bookings from './pages/Bookings'; // ✅ Import "My Bookings" page
import Terms from './pages/Terms'; // Terms page
import Profile from './pages/Profile'; // Import Profile Page
import './App.css';

// ✅ Protected Route Wrapper Component
const ProtectedRoute = () => {
  const isAuthenticated = !!localStorage.getItem("token"); // Check if user is logged in
  return isAuthenticated ? <Outlet /> : <Navigate to="/Logsign" replace />;
};

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} /> {/* Public Routes */}
            <Route path="/Logsign" element={<LogSign />} />
            <Route path="/Terms" element={<Terms />} />

            {/* ✅ Protected Routes (Only accessible if logged in) */}
            <Route element={<ProtectedRoute />}>
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blah" element={<Blah />} />
              <Route path="/welcome" element={<Welcome />} />
              <Route path="/sell-car" element={<SellCar />} />
              <Route path="/book-car" element={<BookCar />} />
              <Route path="/booking/:carId" element={<BookingPage />} />
              <Route path="/bookings" element={<Bookings />} /> {/* ✅ Added "My Bookings" page */}
              <Route path="/profile" element={<Profile />} /> 
            </Route>
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
