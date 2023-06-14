const express = require('express');
const mongoose = require('mongoose');
const router  = express.Router();
const category = require('../data/category.json');

router.post('/category',(req, res)=>{
   res.send(category);
})


module.exports = router;