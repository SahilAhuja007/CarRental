const express=require('express');
const { createcar } = require('../controller/createcar');
const { getAllCars, getCar } = require('../controller/getcars.controller');
const carrouter=express.Router();

carrouter.post('/createCar',createcar);
carrouter.get('/cars',getAllCars);
carrouter.get('/car',getCar);

module.exports=carrouter;