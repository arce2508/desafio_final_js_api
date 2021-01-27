const createUser = require("../../../app/create-user");

const signUp = (req, res) => {
  createUser(req.body)
    .then((user) => {
      res.json(user);
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
  signUp,
};
