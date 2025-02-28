import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // Adjust the import path as necessary
import Footer from './components/Footer'; // Adjust the import path as necessary
import Cont from './components/Cont';
import Home from './pages/Home'; // Import Home page
import About from './pages/About'; // Import About page
import Contact from './pages/Contact'; // Import Contact page
// import FakeReview from './components/FakeReview'; // Import FakeReview component
import './App.css';
import Blah from './pages/Blah';
import LogSign from './pages/logsign';
import Welcome from './pages/welcome';
import SellCar from './pages/SellCar';
import BookCar from './pages/BookCar';
import BookingPage from './components/BookingPage'; // Import the new BookingPage component
import Admin from './Admin/Admin';
import Driver from './Driver/Driver';
import Terms from './pages/Terms';


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} /> {/* Route for Home page */}
            <Route path="/about" element={<About />} /> {/* Route for About page */}
            <Route path="/contact" element={<Contact />} /> {/* Route for Contact page */}
            <Route path="/blah" element={<Blah />} /> {/* Route for Contact page */}
            <Route path="/Logsign" element={<LogSign />} /> {/* Route for login/signup page */}
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/sell-car" element={<SellCar />} /> {/* Route for selling car page */}
            <Route path="/book-car" element={<BookCar />} /> {/* Route for selling car page */}
            <Route path="/booking" element={<BookingPage />} /> {/* Route for booking page */}
            <Route path="/Terms" element={<Terms />} /> {/* Route for booking page */}
          </Routes>
        </div>

        <Footer />

        
      </div>
    </Router>
    // <Admin/>
    // <Driver/>

  );
}

export default App;
