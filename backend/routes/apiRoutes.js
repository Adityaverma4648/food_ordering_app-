const express = require('express');
const router  = express.Router();
const category = require('../data/category.json');
const cousines = require('../data/cousine.json');

router.post('/category',(req, res)=>{
   res.send(category);
})

router.post('/cousines',(req,res)=>{
   res.send(cousines);
})

router.post('/',(req , res)=>{
   res.send(category);
})


module.exports = router;