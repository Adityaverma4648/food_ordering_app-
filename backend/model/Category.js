const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
        name: {
            type : String,
            required : true,
        },
        image: {
            type : String
        },
        dishes : [{
            name : String, 
            image : String,
            description : String 
        }]
},
{
    timestamps : true,
});

module.exports= mongoose.model("Category",categorySchema);