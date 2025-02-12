// routes/userRoutes.js
const express = require('express');
const { signup, login } = require('../../auth/login');
const { bookRide, cancelRide } = require('../controllers/ride.controller'); // Import both functions

const user = express.Router();

user.post('/signup', signup);
user.post('/login', login);
user.post('/bookride', bookRide);
user.post('/cancelride', cancelRide); // Add cancel ride route

module.exports = user;
