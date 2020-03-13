const express = require("express");
const router = express.Router();
const client = require("../models/index")
const addPage = require("../views/addPage")

router.get('/', (req,res,next) =>{
  try{
    res.send('got to GET /wiki/')
  } catch(error){
    next(error)
  }
})

router.post('/', (req,res,next) => {
  try{
      res.json(req.body);
      console.log('dhsfgjflagflhsdgfladsl', req.body);  
  }catch(error){
      next(error);
  }
})

router.get('/add', (req,res,next)=>{
  try {
    console.log(addPage())
    res.send(addPage())
  } catch(error){
    next(error)
  }
})




module.exports = router;
