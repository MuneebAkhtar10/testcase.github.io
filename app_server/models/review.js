var mongoose = require( 'mongoose' );

 reviewSchema=new mongoose.Schema({
    name:{type:String, required:true},
    email :{type:String, required:true},
    restName:{type:String, required:true},
    comments:{type:String},
   // rest:{ type:mongoose.Schema.Types.ObjectId, ref: 'Restaurant'}
});

module.exports=mongoose.model("Review", reviewSchema); 


