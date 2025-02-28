import React, { useState } from 'react';
import { AiOutlineLogout, AiOutlineMenu } from 'react-icons/ai';

const Admin = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 fixed w-full top-0 flex justify-between items-center z-10">
        <div className="flex items-center">
          <span className="text-xl md:text-2xl font-bold mr-6">CarConnect - "ADMIN"</span>
        </div>
        <nav className="flex-grow hidden md:flex justify-center text-lg md:text-2xl">
          <div className="flex space-x-6">
            <a href="#" className="hover:bg-blue-700 py-2 px-6 rounded-md">Home</a>
            <a href="#" className="hover:bg-blue-700 py-2 px-6 rounded-md">B</a>
            <a href="#" className="hover:bg-blue-700 py-2 px-6 rounded-md">C</a>
          </div>
        </nav>
        <button className="md:hidden text-2xl" onClick={toggleMobileMenu}>
          <AiOutlineMenu />
        </button>
      </header>

      {/* Sidebar */}
      <aside className="bg-gray-900 text-white w-64 h-full p-6 pt-20 fixed top-0 left-0 mt-16 z-0 hidden md:block">
        <ul className="space-y-8">
          <li className="font-semibold text-lg hover:bg-gray-700 p-2 rounded">Bookings</li>
          <li className="font-semibold text-lg hover:bg-gray-700 p-2 rounded">Driver</li>
          <li className="font-semibold text-lg hover:bg-gray-700 p-2 rounded">Customer</li>
          <li className="font-semibold text-lg hover:bg-gray-700 p-2 rounded">Customer Care</li>
          <li className="font-semibold text-lg hover:bg-gray-700 p-2 rounded">Cars</li>
          <button className="bg-red-500 text-xl text-white font-semibold py-2 px-8 rounded-lg shadow-md hover:bg-red-600 hover:shadow-lg transition duration-300 ease-in-out focus:outline-none">
            Logout <AiOutlineLogout className="inline" />
          </button>
        </ul>
      </aside>

      {/* Mobile Sidebar */}
      <div className={`md:hidden mt-16 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <button className="bg-gray-800 text-white w-full p-4 flex justify-between items-center hover:bg-gray-700" onClick={toggleMobileMenu}>
          <span>Menu</span>
          <AiOutlineLogout />
        </button>
        <ul className="bg-gray-900 text-white space-y-4 p-4">
          <li className="font-semibold text-base hover:bg-gray-700 p-2 rounded">Bookings</li>
          <li className="font-semibold text-base hover:bg-gray-700 p-2 rounded">Driver</li>
          <li className="font-semibold text-base hover:bg-gray-700 p-2 rounded">Customer</li>
          <li className="font-semibold text-base hover:bg-gray-700 p-2 rounded">Customer Care</li>
          <li className="font-semibold text-base hover:bg-gray-700 p-2 rounded">Cars</li>
          <li>
            <button className="bg-red-500 text-base text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-red-600 hover:shadow-lg transition duration-300 ease-in-out focus:outline-none w-full">
              Logout <AiOutlineLogout className="inline" />
            </button>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <main className={`flex-grow bg-gray-100 mt-16 p-6 ${isMobileMenuOpen ? 'hidden' : 'block'} md:ml-64`}>
        <h2 className="text-xl md:text-2xl font-bold mb-4">Dashboard Content</h2>
        <p>Select an option from the sidebar to view more details.</p>
      </main>

      {/* Footer */}
      <footer className="bg-blue-600 text-white p-4 fixed bottom-0 w-full text-center">
        <p className="text-sm">&copy; 2024 CarConnect. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Admin;
