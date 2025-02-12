const User =require('../models/user.model');

exports.getdetails=async(req,res)=>{
    try{
        const id =req.body;

        if(!id){
            return res.status(401)
            .json({
                success:false,
                data:"id is missing"
            })
        }
        // write id as "_id":"" like this 
        

        const details = await User.findById(id);
        res.status(200)
        .json({
            success:true,
            data:details,
            message:"details find successfully"
        })
    }
    catch(e){
        res.status(500)
        .json({
            success:false,
            data:"issue while fetching user details"
        })
    }
}