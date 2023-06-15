const express = require('express');
const router  = express.Router();
const passport = require('passport');
const cookie = require('cookie-session');
const session = require('express-session');


// importing Models

const User = require('../model/User');


// cookies and session 
router.use(cookieParser())
// Session Setup
router.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
  cookie : {  },
}))

//  user controller - post data gathering-- -- -- -- -- -- -- -- -- -- -- -- -- -- 
router.post("/register", async (req,res)=>{
    const {userName, email, isAdmin , password} = req.body;

    if(!userName || !email || !password || !isAdmin ){
        res.status(400);
        throw new Error("Fill all the entries!");
    }
    const userExists = await User.findOne({ email });

    if (userExists) {
      res.status(409).send('User already Exists...');
    }
    const user = await User.create({
        userName,
        email,
        password,
        isAdmin
      });
    
      if (user) {
        res.status(201).redirect('login');
        //  redirected on login 
      } else {
        res.status(409).res.send('CouldNot Register');
      }

});


//  Login  ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

router.post("/login",(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    const token  = generateToken(user._id);
    const userData  = await User.find({email});
    req.session.userData = userData;
    res.cookie("userDesignation" ,userData[0].designation);
    res.cookie("userName",userData[0].userName);
    res.cookie("token",token);
    res.cookie("UserEmail" , email);
    res.status(200).json(userData).redirect('/');
  } else {
    res.status(200).redirect('UserError')
  }
}))

//  google oauth20

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

router.get("/logout", (req, res) => {
	req.logout();
	res.redirect(process.env.CLIENT_URL);
});

module.exports = router;