 var mongoose = require( 'mongoose' );
 var orderSchema = new mongoose.Schema({ 
    // orderID: {type:Number,required: true},
    // have to add restID and locID
    restaurant: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant'},
    locations:{ type: mongoose.Schema.Types.ObjectId, ref: 'Location'}

 });

 mongoose.model('Orders',orderSchema); 