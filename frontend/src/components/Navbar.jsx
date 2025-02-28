import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const sosNumber = '+91-7678036883'; // Admin's Number

  const handleSosCall = () => {
    window.location.href = `tel:${sosNumber}`;
  };

  return (
    <nav className="bg-black text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-6 md:p-8">
        {/* Logo Section */}
        <div className="relative flex items-center text-3xl md:text-4xl font-bold">
          <img
            className="absolute left-0 w-[30px] md:w-[40px] rounded-full"
            src="https://png.pngtree.com/png-clipart/20210606/original/pngtree-sport-car-logo-vector-png-image_6398339.jpg"
            alt="car logo"
          />
          <span className="ml-10">©ar©onnect</span>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Navigation Links */}
        <ul className={`flex-col md:flex-row md:space-x-6 md:text-2xl md:flex ${menuOpen ? 'flex' : 'hidden'} space-y-4 md:space-y-0`}>
          <li>
            <Link
              to="/"
              className="hover:text-orange-400 transition duration-300"
              onClick={() => setMenuOpen(false)} // Close menu on link click
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-orange-400 transition duration-300"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-orange-400 transition duration-300"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/blah"
              className="hover:text-orange-400 transition duration-300"
              onClick={() => setMenuOpen(false)}
            >
              CarPool
            </Link>
          </li>
          <li>
            <Link
              to="/Logsign"
              className="hover:text-orange-400 transition duration-300"
              onClick={() => setMenuOpen(false)}
            >
              Login/Sign-up🙎
            </Link>
          </li>
        </ul>

        {/* SOS Button (Visible on All Screens) */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={handleSosCall}
            className="bg-red-600 text-white py-2 px-4 rounded-full hover:bg-red-700 transition-colors duration-300 text-lg md:text-xl"
          >
            SOS
          </button>
        </div>
      </div>

      {/* SOS Button for Mobile (Visible outside the hamburger menu) */}
      <div className="md:hidden flex justify-center py-4">
        <button
          onClick={handleSosCall}
          className="bg-red-600 text-white py-4 px-4 rounded-full hover:bg-red-700 transition-colors duration-300 text-lg"
        >
          SOS
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
