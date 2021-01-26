const express = require("express");

const authenticationRouter = require("./auth-router");

const router = express.Router();

router.use(authenticationRouter);

module.exports = router;
