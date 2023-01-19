const User = require("../models/userModel");
const ErrorHandler = require("../utils/errorhandler");

/* exports.registerUser = async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;

  const user = await User.create({ firstName, lastName, email, password });

  res.status(200).json({
    success: true,
    user,
  });
}; */

// user registration
exports.registersUser = async (req, res, next) => {
  const user = await User.create(req.body);
  const token = user.getJWTToken();
  res.status(201).json({
    success: true,
    token,
  });
};

// get all users, for admin
exports.getAllUsers = async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({
    success: true,
    users,
  });
};

// login for user
exports.loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  //
  if (!email || !password) {
    return next(
      new ErrorHandler("Please enter Email and Password you little sneak", 400)
    );
  }
  const user = User.findOne({ email }).select("+password");
  if (!user) {
    return next(new ErrorHandler("invalid email or password"));
  }

  const isPasswordMatched = await user.comparePassword(password);
  if (!isPasswordMatched) {
    return next(new ErrorHandler("Passwords did not match"));
  }

  const token = user.getJWTToken();
  res.status(201).json({
    success: true,
    token,
  });
};
