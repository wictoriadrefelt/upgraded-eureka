const Product = require("../models/productModel");

//admin side create product
exports.createProduct = async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(201).json({
    success: true,
    product,
  });
};

// get all
exports.getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.status(201).json({
    success: true,
    products,
  });
};

exports.getSingleProduct = async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return res.status(500).json({
      success: false,
      message: "No product found",
    });
  }
  res.status(200).json({
    success: true,
    product,
    message: "HERE I AM",
  });
};

exports.updateProduct = async (req, res, next) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    return res.status(500).json({
      success: false,
      message: "No product found",
    });
  }
  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModiy: false,
  });
  res.status(200).json({
    success: true,
    product,
  });
};

exports.deleteProduct = async (req, res, next) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    return res.status(500).json({
      success: false,
      message: "No product found",
    });
  }
  await product.remove();

  res.status(200).json({
    success: true,
    message: "Product was deleted",
  });
};
