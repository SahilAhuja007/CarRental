const express = require('express');
const app = express();
require('dotenv').config(); // Load environment variables from .env file

// Set the PORT from environment variables or default to 8000
const PORT = process.env.PORT || 8000;

// Middleware to parse JSON in request bodies
app.use(express.json());

app.use('/api',require('./src/User/routes/route'));

// Backend database connection
const dbconnect = require('./src/dbconnection/database');
dbconnect();

app.listen(PORT,()=>{
    console.log("server started successfully")
})

