const express = require('express');
const router  = express.Router();
const passport = require('passport');
const generateToken = require("../config/Jwt");
const jwt = require('jsonwebtoken');

// importing Models

const User = require('../model/User');


//  helper function
const verifyToken = (req , res , next) =>{
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(403);
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
  if (err) return res.sendStatus(404);
  req.user = user;
  next();
  }); 
}

//  user controller - post data gathering-- -- -- -- -- -- -- -- -- -- -- -- -- -- 
router.post("/register", async (req,res)=>{
    const {userName, email, password} = req.body;

    if(!userName || !email || !password ){
        res.status(400);
        throw new Error("Fill all the entries!");
    }
    const userExists = await User.findOne({ email });

    if (userExists) {
      res.status(400).json({ message : "User Already Exists..."});
    }
    const user = await User.create({
        userName,
        email,
        password,
        isAdmin
      });
    
      if (user) {
        res.status(200).json({message : "success" });
        //  redirected on login 
      } else {
        res.status(400).json({message : "unsuccessfull"});
      }

});


//  Login  ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

router.post("/login",(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    const token  = generateToken(user);
    res.status(200).json({token});
  } else {
    res.status(400).redirect('UserError');
  }
}))


//  logout ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

router.post('/logout', verifyToken , async (req , res)=>{
  res.status(200).send('Successfully Logged Out!');
} )

//  google oauth20 --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

router.get("/login/success", (req, res) => {
	if (req.user) {
		res.status(200).json({
			error: false,
			message: "Successfully Loged In",
			user: req.user,
		});
	} else {
		res.status(403).json({ error: true, message: "Not Authorized" });
	}
});

router.get("/login/failed", (req, res) => {
	res.status(401).json({
		error: true,
		message: "Log in failure",
	});
});

router.get("/google", passport.authenticate("google", ["profile", "email"]));

router.get(
	"/google/callback",
	passport.authenticate("google", {
		successRedirect: process.env.CLIENT_URL,
		failureRedirect: "/login/failed",
	})
);


module.exports = router;