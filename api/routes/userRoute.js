const express = require("express");
const { registersUser, getAllUsers } = require("../controllers/userController");
const router = express.Router();

router.route("/register").post(registersUser);
router.route("/allUsers").get(getAllUsers);

module.exports = router;
