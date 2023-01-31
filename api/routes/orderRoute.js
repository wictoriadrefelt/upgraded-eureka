const express = require("express");
const {
  newOrder,
  getOrderById,
  getAllOrders,
  deleteOrder,
  updateOrderStatus,
  loggedInOrders,
} = require("../controllers/orderController");

const { authorizedRoles, isAuthenticated } = require("../middleware/auth");

const router = express.Router();

router.route("/order/new").post(/* isAuthenticated, */ newOrder);
router.route("/order/:id").get(getOrderById);
router.route("/orders").get(getAllOrders);
router.route("/admin/orders").get(authorizedRoles("admin"), getAllOrders);
router.route("/admin/orders/:id").delete(authorizedRoles("admin"), deleteOrder);
router.route("/myOrders").get(isAuthenticated, loggedInOrders);
router
  .route("/admin/orders/:id")
  .put(authorizedRoles("admin"), updateOrderStatus);

module.exports = router;
