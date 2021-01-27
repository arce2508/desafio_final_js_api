const express = require("express");

const controller = require("../controllers/post-controller");
const router = express.Router();

router.post("/posts", controller.createPost);
router.get("/posts", controller.listPosts);

module.exports = router;
