const express = require("express");

const controller = require("../controllers/auth-controller");
const router = express.Router();

router.post("/auth/signup", controller.signUp);

module.exports = router;
