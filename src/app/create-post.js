const postRepository = require("../infra/database/repositories/post-repository");

const createPost = async (data) => {
  return postRepository.create(data);
};

module.exports = createPost;
