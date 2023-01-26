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
  deleteUser,
  getUserDetails,
} = require("../controllers/userController");
const { isAuthenticated, autherizedRoles } = require("../middleware/auth");
const router = express.Router();

//get
router.route("/allUsers").get(getAllUsers);
router.route("/userDetails/:id").get(getSingleUser);
router.route("/logout").get(logout);
router.route("/removeUser/:id").delete(deleteUser);

//post
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/password/forgot").post(forgotPassword);

router.route("/password/reset/:token").put(resetPassword);
router.route("/password/update").put(isAuthenticated, updatePassword);

router.route("/myAccount").get(isAuthenticated, getUserDetails);

module.exports = router;
