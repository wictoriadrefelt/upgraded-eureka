const express = require("express");
const {
  processPayment,
  sendStripeApiKey,
} = require("../controllers/paymentController");
const router = express.Router();
const { isAuthenticated } = require("../middleware/auth");

router.route("/payment").post(/* isAuthenticated,  */ processPayment);

router.route("/stripeapikey").get(sendStripeApiKey);

module.exports = router;
