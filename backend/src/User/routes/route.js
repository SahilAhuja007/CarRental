const express=require('express');
const { signup, login } = require('../../auth/login');
const user=express.Router();


user.post('/signup',signup);
user.post('/login',login);

module.exports=user;