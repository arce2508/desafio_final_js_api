const express = require("express");

const authenticationRouter = require("./auth-router");
const postRouter = require("./post-router");

const router = express.Router();

router.use(authenticationRouter);
router.use(postRouter);

module.exports = router;
