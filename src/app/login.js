const { compare } = require("../infra/crypt");
const { createToken } = require("../infra/token");
const userRepository = require("../infra/database/repositories/user-repository");

const login = async (data) => {
  const user = await userRepository.findByEmail(data.email);

  if (!user) {
    throw new Error("Invalid request");
  }

  const isValidPassword = await compare(data.password, user.password);

  if (!isValidPassword) {
    throw new Error("Invalid request");
  }

  const token = createToken({
    userId: user.id,
  });

  return token;
};

module.exports = login;
