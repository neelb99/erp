const mongoose = require('mongoose');

const broadcastSchema = mongoose.Schema({
    to: {type:String, required:true},
    message: {type:String, required:true},
})

const broadcast = mongoose.model('broadcast',broadcastSchema);
module.exports = broadcast;