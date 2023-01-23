const Order = require("../models/orderModel");
const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorhandler");

exports.newOrder = async (req, res, next) => {
  const { shippingInfo, orderItems, paymentInfo, shippingPrice, totalPrice } =
    req.body;
  const order = await Order.create({
    shippingInfo,
    orderItems,
    paymentInfo,
    shippingPrice,
    totalPrice,
    paidAt: Date.now(),
    user: req.params._id,
  });
  res.status(201).json({
    success: true,
    order,
  });
};

exports.getOrderById = async (req, res, next) => {
  const order = await Order.findById(req.params.id).populate("user", "email");
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
  const orders = await Order.find();
  let totalAmount = 0;
  console.log(typeof orders);
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

exports.updateOrderStatus = async (req, res, next) => {
  const order = await Order.find(req.params.id);

  if (order.orderStatus === "Delivered") {
    return next(new ErrorHandler("This order is delivered"));
  }

  order.orderItems.forEach(async (order) => {
    await updateStock(order.Product, order.quantity);
  });

  order.orderStatus = req.body.status;

  if (req.body.status === "Delivired") {
    order.deliveredAt = Date.now();
  }
  await order.save({ validateBeforeSave: false });
  res.status(200).json({
    success: true,
    totalAmount,
    order,
  });
};

async function updateStock(id, quantity) {
  const product = await Product.findById(id);
  product.stock -= quantity;
  await product.save({ validateBeforeSave: false });
}

exports.deleteOrder = async (req, res, next) => {
  const order = await Order.find(req.params.id);

  if (!order) {
    return next(new ErrorHandler("No such order found"));
  }
  await order.remove();
  res.status(200).json({
    success: true,
    order,
  });
};
