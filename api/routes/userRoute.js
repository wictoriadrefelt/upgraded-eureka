const express = require("express");
const {
  registerUser,
  getAllUsers,
  loginUser,
  logout,
  forgotPassword,
  resetPassword,
  updatePassword,
  getSingleUser,
} = require("../controllers/userController");
const router = express.Router();

//get
router.route("/allUsers").get(getAllUsers);
router.route("/userDetails/:id").get(getSingleUser);
router.route("/logout").get(logout);

//post
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/password/forgot").post(forgotPassword);

router.route("/password/reset/:token").put(resetPassword);
router.route("/password/update").put(updatePassword);

module.exports = router;
