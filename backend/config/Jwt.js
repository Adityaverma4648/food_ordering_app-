//  tokenizer function ------------------
const jwt = require('jsonwebtoken');

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: "30 days",
    });
  };

module.exports = generateToken;
