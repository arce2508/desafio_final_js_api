const postRepository = require("../infra/database/repositories/post-repository");

const listPosts = async () => {
  return postRepository.search();
};

module.exports = listPosts;
