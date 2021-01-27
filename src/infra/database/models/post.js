const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  banner: String,
  author: {
    firstName: String,
    lastName: String,
    avatar: String,
  },
  title: String,
  body: String,
  tags: [String],
  createdDate: { type: Date, default: Date.now },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
