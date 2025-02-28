import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Section */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-2xl font-bold">©ar©onnect</h2>
          <p className="text-sm md:text-base mt-1">Your reliable car rental service.</p>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-col md:flex-row md:space-x-6 text-center md:text-left mb-4 md:mb-0 space-y-4 md:space-y-0">
          <li>
            <Link
              to="/"
              className="hover:text-orange-400 transition duration-300 text-lg md:text-xl"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-orange-400 transition duration-300 text-lg md:text-xl"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-orange-400 transition duration-300 text-lg md:text-xl"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/Terms"
              className="hover:text-orange-400 transition duration-300 text-lg md:text-xl"
            >
              Terms And Conditions*
            </Link>
          </li>
        </ul>
      </div>

      {/* Copyright and Design Section */}
      <div className="text-center mt-6 border-t border-gray-700 pt-4">
        <p className="text-sm md:text-md">© {new Date().getFullYear()} ©ar©onnect. All rights reserved.</p>
        <p className="text-sm md:text-lg mt-2">
          Designed with ❤️ by Harsh, Sahil, Mohit, Kaivalya
        </p>
      </div>
    </footer>
  );
};

export default Footer;

