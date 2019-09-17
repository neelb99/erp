const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    customer : {type:String, required:true},
    executedBy : {type:String, default:null},
    status : {type:String, default:'Pending'},
    items: {type:Array, required:true}
})

const order = mongoose.model('order',orderSchema);

module.exports=order;