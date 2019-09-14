const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {type:String, required:true, trim:true},
    password: {type:String, required:true, trim:true},
    role: {type:String,required:true, trim:true}
})

const user = mongoose.model('user',userSchema);
module.exports = user;