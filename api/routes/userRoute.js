const express = require("express");
const {
  registerUser,
  getAllUsers,
  loginUser,
} = require("../controllers/userController");
const router = express.Router();

//get
router.route("/allUsers").get(getAllUsers);

//post
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);

module.exports = router;
