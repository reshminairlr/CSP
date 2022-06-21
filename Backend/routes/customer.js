const express = require('express')
const router = express.Router()
const customerData = require('../src/models/customerData');

router.get('/customerview', async (req, res) => {
  // const dataFromDb = await customerData.findOne({pdtid: "WD1020"});
  const dataFromDb = await customerData.find();

  console.log(dataFromDb, 'its data from db');
  // res.status(200).send('success');
  res.json(dataFromDb);

});

router.get('/insert',async (req,res)=>{
  const abc=await customerData.create({
    pdtid:"WD1021",
    pdttype:"HandsFree",
    mobno:"989532151",
    emailid:"veena3@gmail.com",
    name:"Veena",
    date:"07/08/2021",
    description:"null",
    invoice:"null",
    caseid:"null",
    casestatus:"null"


  }
  );
  
})

module.exports = router;
