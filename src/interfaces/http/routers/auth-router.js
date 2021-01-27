const express = require("express");

const controller = require("../controllers/auth-controller");
const router = express.Router();

router.post("/auth/signup", controller.signUp);
router.post("/auth/login", controller.login);

module.exports = router;
