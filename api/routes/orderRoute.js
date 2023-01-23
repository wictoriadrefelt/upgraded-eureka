const express = require("express");
const {
  newOrder,
  getOrderById,
  getAllOrders,
  deleteOrder,
  updateOrderStatus,
} = require("../controllers/orderController");

const router = express.Router();

router.route("/order/new").post(newOrder);
router.route("/order/:id").get(getOrderById);
router.route("/orders").get(getAllOrders);
router.route("/admin/orders").get(getAllOrders);
router.route("/admin/orders/:id").delete(deleteOrder);
router.route("/admin/orders/:id").put(updateOrderStatus);

module.exports = router;
