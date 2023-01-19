const express = require("express");
const {
  registersUser,
  getAllUsers,
  loginUser,
} = require("../controllers/userController");
const router = express.Router();

//get
router.route("/allUsers").get(getAllUsers);

//post
router.route("/register").post(registersUser);
router.route("/login").post(loginUser);

module.exports = router;
