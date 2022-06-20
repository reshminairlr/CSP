// import connectDB from './db.js'
const express = require('express');
const CustomerData = require('./src/model/Customerdata.js');
const cors = require('cors');
var bodyparser=require('body-parser');
const jwt = require('jsonwebtoken')
var app = new express();
app.use(cors());
app.use(bodyparser.json());

const {mongoose}=require('./db.js');

// const {connectDB}=require('./db.js');


// connectDB()
app.get('/customerview',async function(req,res){
  
    // res.header("Access-Control-Allow-Orgin","*")
    // res.header('Access-Control-Allow-Metods: GET, POST, PATCH, PUT, DELETE, OPTION');
const dataFromDb=await CustomerData.find()
                {
                  console.log("CustomerDetails view from database",+dataFromDb);
                    // res.json(CustomerDetails);
                    // res.send(dataFromDb);
                };
});




app.listen(3005, function(){
    console.log('listening to port 3005');
});