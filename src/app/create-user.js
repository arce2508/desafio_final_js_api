const { encrypt } = require("../infra/crypt");
const userRepository = require("../infra/database/repositories/user-repository");

const createUser = async (data) => {
  const encryptedPassword = await encrypt(data.password);
  const userData = {
    ...data,
    password: encryptedPassword,
  };

  return userRepository.create(userData);
};

module.exports = createUser;
