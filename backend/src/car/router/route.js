const express = require("express");
const { createcar } = require("../controller/createcar");
const { getAllCars, getCar } = require("../controller/getcars.controller");
const carrouter = express.Router();
const { userMiddleware } = require("../../middleware/middleware");

carrouter.post("/createCar", userMiddleware, createcar);
carrouter.get("/cars", userMiddleware, getAllCars);
carrouter.get("/car/:id", userMiddleware, getCar);

module.exports = carrouter;
