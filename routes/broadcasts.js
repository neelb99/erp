const broadcast = require('../models/broadcast.model');
const router = require('express').Router();

router.route('/view').get((req,res)=>{
    broadcast.find()
        .then(found=>res.json(found))
})

router.route('/view/customers').get((req,res)=>{
    broadcast.find({to:'customer'})
        .then(found=>res.json(found))
})

router.route('/view/employees').get((req,res)=>{
    broadcast.find({to:'employee'})
        .then(found=>res.json(found))
})

router.route('/new').post((req,res)=>{
    const message = new broadcast({to:req.body.to,message:req.body.message})
    message.save()
        .then(res.json("sent"));
})

router.route('/delete/:id').get((req,res)=>{
    broadcast.findByIdAndDelete(req.params.id)
        .then(()=>res.json("success"))
})

module.exports = router;