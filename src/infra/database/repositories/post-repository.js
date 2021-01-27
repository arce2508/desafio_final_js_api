const { Post } = require("../models");

const create = async (data) => {
  return Post.create(data);
};

module.exports = {
  create,
};
