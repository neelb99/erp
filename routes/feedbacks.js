const feedback = require('../models/feedback.model');
const router = require('express').Router();

router.route('/add').post((req,res)=>{
    const from = req.body.from;
    const role = req.body.role;
    const message = req.body.message;
    const newFeedback = new feedback({from,role,message})
    newFeedback.save()
        .then(()=>res.json("success"))
})

router.route('/view').get((req,res)=>{
    feedback.find()
        .then(found=>res.json(found));
})

router.route('/delete/:id').get((req,res)=>{
    feedback.findByIdAndDelete(req.params.id)
        .then(()=>res.json("deleted"));
})

module.exports=router;