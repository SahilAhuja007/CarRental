import React from 'react';

const Terms = () => {
  return (
    <div className="bg-gradient-to-r from-gray-500 to-gray-800 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-gray-300 to-gray-500 text-black p-6">
          <h1 className="text-2xl font-bold">Terms and Conditions*</h1>
        </div>
        <div className="p-6">
          <h2 className="text-xl font-semibold text-blue-600">1. Introduction</h2>
          <p className="mt-2 text-gray-700">
            Welcome to our car rental service. These Terms and Conditions outline the rules and regulations for the use of our services.
          </p>

          <h2 className="text-xl font-semibold text-blue-600 mt-6">2. Renting a Car</h2>
          <p className="mt-2 text-gray-700">
            When you rent a car, you agree to:
          </p>
          <ul className="list-disc list-inside mt-2 text-gray-700">
            <li>Provide valid identification and a driving license.</li>
            <li>Return the car in the same condition it was received.</li>
            <li>Pay all rental fees, including taxes and additional charges.</li>
          </ul>

          <h2 className="text-xl font-semibold text-blue-600 mt-6">3. Selling a Car</h2>
          <p className="mt-2 text-gray-700">
            When you sell a car for rent through our platform, you agree to:
          </p>
          <ul className="list-disc list-inside mt-2 text-gray-700">
            <li>Provide accurate and truthful information about the car.</li>
            <li>Ensure that the car has no outstanding liens or claims.</li>
            {/* <li>Transfer ownership legally after a successful sale.</li> */}
          </ul>

          <h2 className="text-xl font-semibold text-blue-600 mt-6">4. Liability</h2>
          <p className="mt-2 text-gray-700">
            We are not liable for any damages, losses, or injuries that occur while using our services. By using our services, you agree to indemnify us against any claims.
          </p>

          <h2 className="text-xl font-semibold text-blue-600 mt-6">5. Changes to Terms</h2>
          <p className="mt-2 text-gray-700">
            We reserve the right to update these terms at any time. We will notify you of any changes through our website.
          </p>

          <h2 className="text-xl font-semibold text-blue-600 mt-6">6. Contact Us</h2>
          <p className="mt-2 text-gray-700">
            If you have any questions about these Terms and Conditions, please contact us at our customer service.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
