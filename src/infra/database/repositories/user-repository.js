const { User } = require("../models");

const create = async (data) => {
  return User.create(data);
};

const findByEmail = async (email) => {
  return User.findOne({ email }).exec();
};

module.exports = {
  create,
  findByEmail,
};
