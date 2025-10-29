const express = require("express");
const app = express();
const fileUpload = require("express-fileupload");
require("dotenv").config();
const cors = require("cors");

// Set the PORT
const PORT = process.env.PORT || 8000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // for parsing form data
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);
app.use(cors());

// Routes
app.use("/user", require("./src/User/routes/route"));
app.use("/rent", require("./src/Rent/routes/rout"));
app.use("/car", require("./src/car/router/route"));

// Database
const dbconnect = require("./src/dbconnection/database");
dbconnect();

// Cloudinary
const { connectClouinary } = require("./src/cloudinary/cloudinary");
connectClouinary();

// Start server
app.listen(PORT, () => {
  console.log(`Server started successfully on port ${PORT}`);
});
