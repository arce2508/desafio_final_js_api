const mongoose = require("mongoose");

const connect = async () => {
  const uri = process.env.MONGO_URI;
  const options = { useNewUrlParser: true, useUnifiedTopology: true };

  await mongoose.connect(uri, options);
};

module.exports = {
  connect,
};
