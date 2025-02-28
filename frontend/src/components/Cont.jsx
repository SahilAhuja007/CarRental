import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import carImage from '../assets/images/bgcar.png';

const Cont = () => {
  const navigate = useNavigate();
  const [selectedCar, setSelectedCar] = useState(null);

  const carTypes = {
    BMW: ['X3', 'X5', 'M3', 'M4', 'Z4', 'i3', 'X1', 'X6', 'X7', 'i8'],
    AUDI: ['Q3', 'Q5', 'A3', 'A4', 'A6', 'A8', 'TT', 'Q7', 'e-tron', 'Q8'],
    NISSAN: ['Altima', 'Maxima', '370Z', 'Rogue', 'Murano', 'Sentra', 'Versa', 'Armada', 'Pathfinder', 'Frontier'],
    MERCEDES: ['C-Class', 'E-Class', 'S-Class', 'GLA', 'GLC', 'GLE', 'GLS', 'A-Class', 'CLA', 'SL'],
    TOYOTA: ['Camry', 'Corolla', 'RAV4', 'Highlander', 'Tacoma', 'Tundra', 'Sienna', 'Prius', '4Runner', 'C-HR'],
  };

  const handleBookCar = () => navigate('/Logsign');
  const handleSellCar = () => navigate('/Logsign');

  return (
    <div className="flex flex-col gap-16 text-center text-gray-200 bg-gradient-to-r from-gray-700 to-gray-900 px-4 py-6">
      <div className="text-xl sm:text-2xl md:text-4xl text-gray-300">
        <h2>-RENT THE BEST QUALITY CAR WITH US</h2>
        <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-400">
          Experience the thrill of driving luxury and comfort with our top-tier car rentals. From sports cars to family SUVs, we have the perfect vehicle to suit your needs.
        </p>
        <div className="flex justify-center py-10">
          <img className="w-[260px] sm:w-[340px] md:w-[440px]" src={carImage} alt="car" />
        </div>
        <div className="btn flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
          <button onClick={handleBookCar} className="w-full sm:w-auto bg-gray-700 text-gray-100 font-semibold py-2 px-4 sm:px-6 rounded-lg hover:bg-gray-600 transition duration-300 shadow-lg">
            Book your Car
          </button>
          <button onClick={handleSellCar} className="w-full sm:w-auto bg-gray-800 text-gray-300 font-semibold py-2 px-4 sm:px-6 rounded-lg hover:bg-gray-700 transition duration-300 shadow-lg">
            Sell your Car For Rent
          </button>
        </div>
        <div className="inputbox flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center mx-auto my-5 text-sm sm:text-md md:text-lg text-gray-200">
          <input type="text" className="w-full sm:w-1/3 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg shadow-sm focus:outline-none focus:border-gray-500" placeholder="Enter a location (city, address, or landmark)" />
          <div className="w-full sm:w-1/3">
            <label className="block text-sm font-medium text-gray-400" htmlFor="pickup-date">Pickup Date 🔽</label>
            <input id="pickup-date" type="date" className="w-full px-4 py-2 mt-1 bg-gray-800 border border-gray-700 rounded-lg shadow-sm focus:outline-none focus:border-gray-500" />
          </div>
          <div className="w-full sm:w-1/3">
            <label className="block text-sm font-medium text-gray-400" htmlFor="return-date">Return Date 🔽</label>
            <input id="return-date" type="date" className="w-full px-4 py-2 mt-1 bg-gray-800 border border-gray-700 rounded-lg shadow-sm focus:outline-none focus:border-gray-500" />
          </div>
          <button className="w-full sm:w-auto px-4 sm:px-6 py-2 bg-gray-700 text-gray-100 font-semibold rounded-lg hover:bg-gray-600 transition duration-300 shadow-lg">
            Book Your Ride 🚗
          </button>
        </div>
      </div>
      <div id="par2" className="text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-gray-300">Explore our Top Deals</h2>
        <p className="text-lg sm:text-xl mb-4 text-gray-400">-=====🔥=====-</p>
        <div className="flex flex-wrap gap-4 justify-center">
          {Object.keys(carTypes).map((brand) => (
            <div className="relative group" key={brand}>
              <button className="w-full sm:w-auto bg-gray-700 text-gray-100 py-2 px-4 rounded focus:outline-none text-sm sm:text-base">
                {brand}
              </button>
              <div className="absolute z-10 hidden group-hover:block bg-gray-800 border border-gray-700 rounded shadow-lg mt-1">
                {carTypes[brand].map((type) => (
                  <div key={type} className="py-2 px-4 hover:bg-gray-700 cursor-pointer text-gray-200" onClick={() => setSelectedCar(`${brand} ${type}`)}>
                    {type}
                  </div>
                ))}
              </div>
            </div>
          ))}
          <button className="bg-gray-700 text-gray-100 py-2 px-4 rounded focus:outline-none text-sm sm:text-base">
            EXPLORE MORE..
          </button>
        </div>
      </div>
      {selectedCar && (
        <div id="par3" className="text-center mt-10">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-300">You have selected: {selectedCar}</h2>
        </div>
      )}
    </div>
  );
};

export default Cont;
