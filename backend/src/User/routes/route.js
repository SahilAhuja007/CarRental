const express=require('express');
const { signup, login } = require('../../auth/login');
const { getdetails } = require('../controllers/getdetails.controller');
const user=express.Router();


user.post('/signup',signup);
user.post('/login',login);
user.get('/userdetail',getdetails);

module.exports=user;