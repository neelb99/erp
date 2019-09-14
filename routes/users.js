const user = require('../models/user.model');
const router = require('express').Router();

router.route('/login').post((req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    user.findOne({username:username})
        .then(foundUser=>{res.json(foundUser);})
        .catch(()=>{res.json("error")});
})

router.route('/register').post((req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const role = req.body.role;
    const newUser = new user({username:username,password:password,role:role});
    newUser.save()
        .then(()=>res.json("User Added"))
        .catch(()=>res.json("error"));
})

module.exports = router;