const User = require("../models/userModel");

/* exports.registerUser = async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;

  const user = await User.create({ firstName, lastName, email, password });

  res.status(200).json({
    success: true,
    user,
  });
}; */

exports.registersUser = async (req, res, next) => {
  const user = await User.create(req.body);
  res.status(201).json({
    success: true,
    user,
  });
};

exports.getAllUsers = async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({
    success: true,
    users,
  });
};
