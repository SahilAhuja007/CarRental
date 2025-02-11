const express =require('express');
const app=express();
require('dotenv').config();
const PORT=process.env.PORT|| 8000;
app.use(express.json());

app.use('/api',require('./src/User/routes/route'));

// backend connection
const dbconnect=require('./src/dbconnection/database');
dbconnect();

app.listen(PORT,()=>{
    console.log("server started successfully")
})

