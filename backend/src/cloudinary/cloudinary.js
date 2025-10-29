const cloudinary = require("cloudinary").v2;
require("dotenv").config();

const connectClouinary = async () => {
  try {
    cloudinary.config({
      api_key: process.env.CLOUDINARY_API_KEY,
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
    console.log("cloudinary connected successfully");
  } catch (error) {
    console.log("issue while connecting to cloudinary:- ", error.message);
  }
};

module.exports = { connectClouinary, cloudinary };
