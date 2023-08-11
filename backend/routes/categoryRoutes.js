const express = require('express');
const router  = express.Router();

//  to be removed as data will be fetched from mongoDB
const category = require('../data/category.json');
const Category = require('../model/Category');

//  Category---------------------------------------------------------------------
router.post('/fetch',(req, res)=>{
    res.send(category);
 })
 
router.post('/fetchOneCategory/id', (req , res)=>{
    res.send(Category);    
})

 //  for admin
 router.post('/create', (req, res)=>{
     // new form data      
 }) 
 
router.post('/delete/id',(req , res)=>{
     // removing using ID      
})
