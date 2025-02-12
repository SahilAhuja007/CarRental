const express = require('express');
const app = express();
require('dotenv').config(); // Load environment variables from .env file

// Set the PORT from environment variables or default to 8000
const PORT = process.env.PORT || 8000;

// Middleware to parse JSON in request bodies
app.use(express.json());

// Importing Routes
const userRouter = require('./src/User/routes/route'); // Adjust the path if necessary

// Use the routes with the '/api' prefix
app.use('/api', userRouter);

// Backend database connection
const dbconnect = require('./src/dbconnection/database');
dbconnect();

// Start the server
app.listen(PORT, () => {
    console.log(`Server started successfully on port ${PORT}`);
});
