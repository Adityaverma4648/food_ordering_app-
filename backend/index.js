require("dotenv").config();
const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const authRoutes = require('./routes/authRoutes');

// ------------------------------------------------------------------------------------------------------------------------------------------



// express instance
const app = express();
app.use(express.json()); // to accept json data
app.use(express.urlencoded({extended:false}));

const connectDB = require("./config/connect");
// PORT decision
const PORT = process.env.PORT||7000;


//  Routes intialized
app.get('/',(req , res)=>{
    res.send('Hello welcome to default URL');
})
app.use('/api',apiRoutes);
app.use('/auth', authRoutes);


const start = async ()=>{
    try {
        await connectDB(process.env.MONGODB_URI);
       app.listen(PORT,console.log(`SERVER STARTED AT ${PORT}`));
    } catch (error) {
        console.log(`Connection failed : ${error}`)
    }
 
 }
 start();
 