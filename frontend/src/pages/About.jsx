import React from 'react';
// import teamImage from '../assets/team.jpg'; // Adjust the path to your image

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-500 to-gray-800 p-5">
      <h1 className="text-5xl font-bold text-white">Welcome to ©ar©onnect</h1>
      <p className="mt-4 text-xl text-white max-w-3xl text-center">
        Your best choice for car rentals! We pride ourselves on providing the finest car rental web application with a fleet of top-quality vehicles and safe, reliable drivers.
      </p>

      <img
        src="https://res.cloudinary.com/ddc0uikea/image/upload/v1728061810/7197355.jpg" // Ensure this image path is correct
        alt="Our Team"
        className="mt-8 w-3/4 md:w-1/2 rounded-lg shadow-lg border-4 border-white transition-transform transform hover:scale-105"
      />

      <div className="mt-10 p-6 bg-white rounded-lg shadow-lg max-w-2xl text-center">
        <h2 className="text-4xl font-semibold text-gray-600">Why Choose Us?</h2>
        <p className="mt-2 text-lg text-gray-700">
          At ©ar©onnect, we prioritize your safety and satisfaction. Our vehicles are thoroughly inspected, and our drivers are trained professionals. Here’s what sets us apart:
        </p>
        <ul className="mt-4 text-lg text-gray-700 list-disc list-inside">
          <li>✅ Wide range of vehicles to choose from</li>
          <li>✅ User-friendly booking experience</li>
          <li>✅ Competitive pricing with no hidden fees</li>
          <li>✅ 24/7 customer support for your peace of mind</li>
        </ul>
      </div>

      <div className="mt-10 p-6 bg-white rounded-lg shadow-lg max-w-2xl text-center">
        <h2 className="text-4xl font-semibold text-gray-600">Our Commitment</h2>
        <p className="mt-2 text-lg text-gray-700">
          We are committed to making your travel experience seamless and enjoyable. Whether you need a car for a day, a week, or longer, ©ar©onnect is here to serve you.
        </p>
      </div>

      <div className="mt-10 text-center text-white">
        <h2 className="text-4xl font-semibold">Join Us Today!</h2>
        <p className="mt-2 text-lg">Experience the difference with ©ar©onnect. Book your ride now!</p>
      </div>
    </div>
  );
};

export default About;
