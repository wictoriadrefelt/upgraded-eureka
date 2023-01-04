const express = require("express");

const {
  newOrder,
  getOrderById,
  getAllOrders,
} = require("../controllers/orderController");
const { route } = require("./productRoute");

const router = express.Router();

router.route("/order/new").post(newOrder);
router.route("/order/:id").get(getOrderById);
router.route("/order/").get(getAllOrders);

module.exports = router;
