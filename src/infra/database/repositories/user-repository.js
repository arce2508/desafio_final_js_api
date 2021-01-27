const { User } = require("../models");

const create = async (data) => {
  return User.create(data);
};

module.exports = {
  create,
};
