const express = require('express');
const router  = express.Router();

//  to be removed as data will be fetched from mongoDB
const category = require('../data/category.json');
const cousines = require('../data/cousine.json');

// fetch Category
router.get('/category',async (req, res)=>{
   res.status(200).json({})
})

module.exports = router;