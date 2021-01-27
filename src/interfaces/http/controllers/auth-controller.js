const actions = require("../../../app");

const signUp = (req, res) => {
  actions
    .createUser(req.body)
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

const login = (req, res) => {
  actions
    .login(req.body)
    .then((token) => {
      res.json({ token });
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
  login,
};
