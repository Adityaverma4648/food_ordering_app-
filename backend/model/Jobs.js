const mongoose = require('mongoose');
const jobSchema = new mongoose.Schema({
    userEmail : {
        type : String,
        required : true,
    },
    jobName : {
        type : String,
        required : true,
    },
    beginningYear : {
        type : String,
        required : true
    },
    yearOfCompletion : {
        type : String,
        required : true
    },
    role : {
        type : String,
        required : true
    }
},
{
     timestamps: true,
}
)

module.exports= mongoose.model("Jobs",jobSchema);