const actions = require("../../../app");

const createPost = (req, res) => {
  actions
    .createPost(req.body)
    .then((post) => {
      res.json(post);
    })
    .catch((error) => {
      const status = 500;
      const response = {
        message: error.message,
        status,
      };

      console.error(error);
      res.status(status).json(response);
    });
};

module.exports = {
  createPost,
};
