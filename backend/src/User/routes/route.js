// routes/userRoutes.js
const express = require('express');
const { signup, login } = require('../../auth/login');
<<<<<<< HEAD
const { bookRide, cancelRide } = require('../controllers/ride.controller'); // Import both functions
=======
const { getdetails } = require('../controllers/getdetails.controller');
const user=express.Router();
>>>>>>> 13bc06005b58f01367e5a8c98260943ebedb40ef

const user = express.Router();

<<<<<<< HEAD
user.post('/signup', signup);
user.post('/login', login);
user.post('/bookride', bookRide);
user.post('/cancelride', cancelRide); // Add cancel ride route
=======
user.post('/signup',signup);
user.post('/login',login);
user.get('/userdetail',getdetails);
>>>>>>> 13bc06005b58f01367e5a8c98260943ebedb40ef

module.exports = user;
