const express =require('express');
const { createrent, cancelerent, updaterent } = require('../controller/rent.controller');

const rentrouter=express.Router();

rentrouter.post('/create',createrent);
rentrouter.delete('/delete',cancelerent);
rentrouter.put('/update',updaterent);

module.exports=rentrouter;