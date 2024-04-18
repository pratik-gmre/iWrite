const express = require("express");
const userModel = require("../modules/user-module.js");
const controller = require("../controllers/user-controlller.js");

const router = express.Router();

router.route("/register").post(controller.register);
router.route("/login").post(controller.login);

module.exports = router;
