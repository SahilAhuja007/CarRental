const mongoose=require('mongoose');

const rentSchema=new mongoose.Schema({
  car:{
      type:mongoose.Schema.ObjectId,
      ref:"Car",
      required:true,
  },
  owner:{
      type:mongoose.Schema.ObjectId,
      ref:"User",
      required:true
  },
  dealer:{
      type:mongoose.Schema.ObjectId,
      ref:"User",
      required:true
  },
  duration:{
      type:String,
      required:true
  },
  totalamount:{
    type:Number,
    required:true
  }
});

module.exports=mongoose.model("Rent",rentSchema);