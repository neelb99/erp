const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const userRouter = require('./routes/users');
const broadcastRouter = require('./routes/broadcasts');
require('dotenv').config();

const uri = process.env.DB_URI;
const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect(uri,{useCreateIndex:true,useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>console.log("Connected"))
    .catch(err=>console.log(err));

app.use('/api/users',userRouter);
app.use('/api/broadcasts',broadcastRouter);

if(PORT!==5000){
app.use(express.static(path.join(__dirname,"client","build")));
app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"client","build","index.html"));
});
}

app.listen(PORT,()=>console.log("Server Running"))