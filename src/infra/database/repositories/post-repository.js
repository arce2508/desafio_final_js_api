const { post } = require("../../../interfaces/http/server");
const { Post } = require("../models");

const create = async (data) => {
  return Post.create(data);
};

const search = async (filter = {}) => {
  return Post.find(filter);
};

module.exports = {
  create,
  search,
};
