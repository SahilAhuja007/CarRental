import React, { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser'; // Corrected import

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [imageLoaded, setImageLoaded] = useState(false); // State to track image loading

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_c4vukal', // Replace with your Service ID
        'template_gyurn08', // Replace with your Template ID
        formData,
        'T9JnoMWLZhV6JOkq0' // Replace with your User ID
      )
      .then((result) => {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        alert('Failed to send message, please try again later.');
        console.error(error);
      });
  };

  // Preload image
  useEffect(() => {
    const img = new Image();
    img.src = 'https://res.cloudinary.com/ddc0uikea/image/upload/v1728062981/contact-register-feedback-support-help-concept_nofi5r.jpg';
    img.onload = () => setImageLoaded(true);
  }, []);

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen bg-cover ${imageLoaded ? '' : 'bg-gray-500' // Fallback color while loading
        }`}
      style={{
        backgroundImage: imageLoaded
          ? `url('https://res.cloudinary.com/ddc0uikea/image/upload/v1728062981/contact-register-feedback-support-help-concept_nofi5r.jpg')`
          : 'none',
      }}
    >
      <div className="bg-gray-800 bg-opacity-75 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl sm:text-5xl font-bold text-white mb-6">Contact Us</h1>
        <p className="text-lg text-gray-300 mb-10">We'd love to hear from you!</p>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="shadow-lg appearance-none border rounded-lg w-full py-3 px-4 text-gray-300 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-gray-400 bg-gray-700 border-gray-600"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="shadow-lg appearance-none border rounded-lg w-full py-3 px-4 text-gray-300 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-gray-400 bg-gray-700 border-gray-600"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              className="shadow-lg appearance-none border rounded-lg w-full py-3 px-4 text-gray-300 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-gray-400 bg-gray-700 border-gray-600"
              rows="4"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transition duration-300 transform hover:scale-105"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      <div className="mt-10 text-gray-300 text-center text-lg sm:text-2xl bg-gray-800 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold">Get In Touch</h2>
        <p className="mt-2">📞 Phone: +1 (555) 123-4567</p>
        <p>Email: info@carconnect.com</p>
        <p>🌍 Address: 123 Car Rental St, City, Country</p>
      </div>
    </div>
  );
};

export default Contact;
