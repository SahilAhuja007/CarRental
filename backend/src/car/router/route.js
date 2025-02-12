const express=require('express');
const { createcar } = require('../controller/createcar');
const carrouter=express.Router();

carrouter.post('/create/car',createcar);

module.exports=carrouter;