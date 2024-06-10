const express = require("express");
const router = express.Router();
const {
  registerAdmin,
  loginUser,
  getUserDetails,
  logout,
  registerSubAdmin,
  forgotPassword,
  resetPassword,
  sampleWork,
} = require("../controllers/authControllers");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
router.route("/login/user").post(loginUser);
router.route("/user/me").get(isAuthenticatedUser, getUserDetails);
router.route("/logout").get(logout);
router.route("/user/forgot/password").post(forgotPassword);
router.route("/user/password/reset").put(resetPassword);
router.route("/sample").get(sampleWork);

module.exports = router;
