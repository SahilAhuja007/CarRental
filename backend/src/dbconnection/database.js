const mongoose=require('mongoose');
require('dotenv').config();

const dbconnect=()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>{console.log("database connected succesfully")})
    .catch((e)=>{console.log("issue on db connection"+e)})
}
module.exports=dbconnect;