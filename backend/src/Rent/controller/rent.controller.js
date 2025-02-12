const Rent=require('../models/rent.model');
const Car=require('../../car/carSchema');
const User=require('../../User/models/user.model');

exports.createrent=async(req,res)=>{
    try{
        const {carid,dealerid,time}=req.body;
        
        if(!carid || !dealerid || !time){
            return res.status(401)
            .json({
                success:false,
                data:"fill all the fields"
            })
        }

        // check car is present or not
        const car=await Car.findById(carid);
        if(!car){
            return res.status(401)
            .json({
                success:false,
                data:"car is not present"
            })
        }

        // check if User is exist or not 
        const user=await User.findById(dealerid);
        if(!user){
            return res.status(401)
            .json({
                success:false,
                data:"driver is not present"
            })
        }

        // create rent now
        let ownerid=car.ownerId;
        let duration=time;
        let totalamount=parseInt(time)*car.pricePerHour;
        console.log("data Rent",req.body)
        console.log("totalAmount",totalamount);
        const rent=await Rent.create({car:carid,owner:ownerid,dealer:dealerid,duration,totalamount});
        console.log("rent",rent);
        res.status(200)
        .json({
            success:true,
            data:rent,
            message:"rent created successfully"
        })
    }
    catch(e){
        res.status(500)
        .json({
            success:false,
            data:"issue while creating rent"
        })
    }
}