const User = require("../models/userModel");
const ErrorHandler = require("../utils/errorhandler");
const passToken = require("../utils/jwtToken");

// user registration
exports.registerUser = async (req, res, next) => {
  const user = await User.create(req.body);
  passToken(user, 201, res);
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
  console.log(email, password);

  // checking if user has given password and email both

  if (!email || !password) {
    return next(new ErrorHandler("Please Enter Email & Password", 400));
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new ErrorHandler("Invalid email or password, no user", 401));
  }

  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    return next(
      new ErrorHandler("Invalid email or password, so fuck you", 401)
    );
  }

  passToken(user, 200, res);
};
