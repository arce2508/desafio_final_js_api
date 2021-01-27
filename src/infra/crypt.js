const bcrypt = require("bcrypt");

const saltRounds = 10;

const encrypt = async (plainTextString) => {
  return bcrypt.hash(plainTextString, saltRounds);
};

const compare = async (plainTextString, hash) => {
  return bcrypt.compare(plainTextString, hash);
};

module.exports = {
  compare,
  encrypt,
};
