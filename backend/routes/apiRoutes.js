const express = require('express');
const router  = express.Router();

//  to be removed as data will be fetched from mongoDB
const category = require('../data/category.json');
const cousines = require('../data/cousine.json');

// importing all models required

//  Cousines-------------------------------------------------------------------------
router.post('/fetchCousines',(req,res)=>{
   res.send(cousines);
})











































router.post('/',(req , res)=>{
   res.send(category);
})


module.exports = router;