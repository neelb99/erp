const user = require('../models/user.model');
const router = require('express').Router();
const bcrypt = require('bcrypt');

router.route('/login').post((req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    user.findOne({username:username})
        .then(foundUser=>{
            if(foundUser===null){res.json(foundUser)}
            else{
                bcrypt.compare(password,foundUser.password)
                    .then(same=>{
                        if(same){res.json(foundUser);}
                        else{res.json("wrong");}
                    })
            }
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

router.route('/view').get((req,res)=>{
    user.find()
        .then(found=>res.json(found))
})

router.route('/viewcustomers').get((req,res)=>{
    user.find({role:'customer'})
        .then(found=>res.json(found));
})

router.route('/delete/:id').get((req,res)=>{
    user.findByIdAndDelete(req.params.id)
        .then(()=>res.json("deleted"))
})

module.exports = router;