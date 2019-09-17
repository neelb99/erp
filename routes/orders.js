const order = require('../models/order.model');
const router = require('express').Router();

router.route('/getexecuted').get((req,res)=>{
    order.find({status:'Executed'})
        .then(found=>res.json(found));
})

router.route('/getpending').get((req,res)=>{
    order.find({status:'Pending'})
        .then(found=>res.json(found))
})

router.route('/getcustomerorders').post((req,res)=>{
    order.find({customer:req.body.user})
        .then(found=>res.json(found))
})

router.route('/new').post((req,res)=>{
    const customer = req.body.customer;
    const items = req.body.items;
    const newOrder = new order({customer:customer,items:items});
    newOrder.save()
        .then(()=>res.json("Order Placed"))
})

router.route('/execute/:id').post((req,res)=>{
    order.findByIdAndUpdate(req.params.id, {status:'Executed',executedBy:req.body.employee})
        .then(()=>res.json("executed"));
})

router.route('/cancel/:id').get((req,res)=>{
    order.findByIdAndDelete(req.params.id)
        .then(()=>res.json("Cancelled"));
})

module.exports = router;
