const express = require("express");
const userController = require("../controllers/usersController");

const router = express.Router();

router.get("/:id", userController.getUser);

module.exports = router;
