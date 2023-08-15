require("dotenv").config();
const express = require('express');
const cors = require('cors');
const passport = require('passport');
const cookieSession = require('cookie-session');

//  Routes files
const apiRoutes = require('./routes/apiRoutes');
const authRoutes = require('./routes/authRoutes');




// express instance
const app = express();
app.use(express.json()); // to accept json data
app.use(express.urlencoded({extended:false}));

const connectDB = require("./config/connect");
// PORT decision
const PORT = process.env.PORT||7000;

app.use(
	cookieSession({
		name: "session",
		keys: ["foodLover"],
		maxAge: 24 * 60 * 60 * 100,
	})
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
	cors({
		origin: "http://localhost:3000",
		methods: "GET,POST,PUT,DELETE",
		credentials: true,
	})
);

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
 