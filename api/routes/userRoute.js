const express = require("express");
const {
  registerUser,
  getAllUsers,
  loginUser,
  logout,
} = require("../controllers/userController");
const router = express.Router();

//get
router.route("/allUsers").get(getAllUsers);

//post
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logout);

module.exports = router;
