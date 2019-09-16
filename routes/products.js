const product = require('../models/product.model');
const router = require('express').Router();

router.route('/add').post((req,res)=>{
    const title = req.body.title;
    const description = req.body.description;
    const link=req.body.link;
    const newProduct = new product({title,description,link})
    newProduct.save()
        .then(()=>res.json("success"))
})

router.route('/view').get((req,res)=>{
    product.find()
        .then(found=>res.json(found));
})

router.route('/delete/:id').get((req,res)=>{
    product.findByIdAndDelete(req.params.id)
        .then(()=>res.json("deleted"));
})

module.exports=router;