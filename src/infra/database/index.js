const mongoose = require("mongoose");

const connect = async () => {
  const uri =
    "mongodb+srv://Arce:ArcGut@cluster0.b2i9j.mongodb.net/Posts_desafio";
  const options = { useNewUrlParser: true, useUnifiedTopology: true };

  await mongoose.connect(uri);
};

module.exports = {
  connect,
};
