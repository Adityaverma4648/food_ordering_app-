require("dotenv").config();
const express = require('express');
const hbs = require('hbs');
const path =  require('path');
const jobData = require("./data/JobData.json");
const apiRoutes = require('./routes/apiRoutes');
const generateToken = require("./config/Jwt");
const educationRoutes = require("./routes/educationRoutes");
const jobRoutes = require("./routes/jobRoutes");
const internshipRoutes = require("./routes/internshipRoutes");
const responsibilityRoutes = require("./routes/responsibilityRoutes");
const projectRoutes = require("./routes/projectRoutes");
const worksRoutes = require("./routes/workRoutes");
const opportunityRoutes = require("./routes/opportunityRoutes");
const location = require('./data/Location.json');

//  cookie
const cookieParser = require('cookie-parser');
const session = require('express-session');

//  calling mongo models

const User = require("./model/User");
const Education = require("./model/Education");
const Jobs = require("./model/Jobs");
const Internships = require("./model/Internships");
const Responsibility = require("./model/Responsibility");
const Projects = require("./model/Projects");
const Works = require("./model/Works") 
// ------------------------------------------------------------------------------------------------------------------------------------------



// express instance
const app = express();
app.use(express.json()); // to accept json data
app.use(express.urlencoded({extended:false}));
s
const connectDB = require("./config/connect");
// PORT decision
const PORT = process.env.PORT||7000;





const start = async ()=>{
    try {
        await connectDB(process.env.MONGODB_URI);
       app.listen(PORT,console.log(`SERVER STARTED AT ${PORT}`));
    } catch (error) {
        console.log(`Connection failed : ${error}`)
    }
 
 }
 start();
 