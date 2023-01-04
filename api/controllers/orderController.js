const Order = require("../models/orderModel");
const Product = require("../models/productModel");

exports.newOrder = async (req, res, next) => {
  const { shippingInfo, itemsInOrder, paymentInfo, shippingPrice, totalPrice } =
    req.body;
  const order = await Order.create({
    shippingInfo,
    itemsInOrder,
    paymentInfo,
    shippingPrice,
    totalPrice,
    paidAt: Date.now(),
  });
  res.status(201).json({
    success: true,
    order,
  });
};

exports.getOrderById = async (req, res, next) => {
  const order = await Order.findById(req.params.id);
  // WHEN USER EXISTS ADD HERE
  if (!order) {
    return "order not found";
  }
  res.status(200).json({
    success: true,
    order,
  });
};

exports.getAllOrders = async (req, res, next) => {
  const orders = Order.find();
  let totalAmount = 0;
  // WHEN USER EXISTS ADD HERE
  orders.forEach((order) => {
    totalAmount += order.totalPrice;
  });
  res.status(200).json({
    success: true,
    totalAmount,
    orders,
  });
};
