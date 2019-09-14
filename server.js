const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const uri = process.env.DB_URI;
const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect(uri,{useCreateIndex:true,useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>console.log("Connected"))
    .catch(err=>console.log(err));

app.listen(PORT,()=>console.log("Server Running"))