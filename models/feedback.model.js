const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    from: {type:String, required:true},
    role: {type:String, required:true},
    message: {type:String, required:true}
})

const feedback = mongoose.model('feedback',feedbackSchema);

module.exports=feedback;