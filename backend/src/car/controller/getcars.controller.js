const Car =require('../carSchema');

exports.getAllCars=async(req,res)=>{
    try{
        const car=await Car.find({});

        res.status(200)
        .json({
            success:true,
            data:car,
            message:"cars fetched successfully"
        })
    }
    catch(e){
        res.status(500)
        .json({
            success:false,
            data:e.message,
            message:"issue while fetching cars"
        })
    }
}

exports.getCar=async(req,res)=>{
    try{
        const id=req.body;
        const car=await Car.findById(id);

        res.status(200)
        .json({
            success:true,
            data:car,
            message:"car fetched successfully"
        })
    }
    catch(e){
        res.status(500)
        .json({
            success:false,
            data:e.message,
            message:"issue while fetching car"
        })
    }
}