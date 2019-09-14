const user = require('../models/user.model');
const router = require('express').Router();
const bcrypt = require('bcrypt');

router.route('/login').post((req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    user.findOne({username:username})
        .then(foundUser=>{
            bcrypt.compare(password,foundUser.password)
                .then(same=>{
                    if(same){res.json(foundUser);}
                    else{res.json("wrong");}
                })
        })
        .catch(()=>{res.json("error")});
})

router.route('/register').post((req,res)=>{
    const username = req.body.username;
    user.findOne({username:username})
        .then(foundUser=>{
            if(foundUser===null){
                bcrypt.hash(req.body.password,10)
                    .then(encrypted=>{
                        const password = encrypted;
                        const role = req.body.role;
                        const newUser = new user({username:username,password:password,role:role});
                        newUser.save()
                        .then(()=>res.json("User Added"))
                        .catch(()=>res.json("error"));
                    })
            }
            else{
                res.json(null);
            }
        })
})

module.exports = router;