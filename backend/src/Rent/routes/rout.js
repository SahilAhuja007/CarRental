const express =require('express');
const { createrent } = require('../controller/rent.controller');

const rentrouter=express.Router();

rentrouter.post('/rent/create',createrent);

module.exports=rentrouter;