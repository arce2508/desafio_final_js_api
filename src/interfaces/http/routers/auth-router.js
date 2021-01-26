const express = require("express");

const controller = require("../controllers/auth-controller");
const router = express.Router();

router.post("/", controller.signUp);

module.exports = router;
