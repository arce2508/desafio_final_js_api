const jwt = require("jsonwebtoken");

const secret = "shhhhh";

const createToken = (payload) => {
  return jwt.sign(payload, secret);
};

module.exports = {
  createToken,
};
