const bcrypt = require("bcrypt");

const saltRounds = 10;

const encrypt = async (plainTextString) => {
  return bcrypt.hash(plainTextString, saltRounds);
};

module.exports = {
  encrypt,
};
