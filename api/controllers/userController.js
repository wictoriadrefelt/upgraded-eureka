const User = require("../models/userModel");
const ErrorHandler = require("../utils/errorhandler");

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
      new ErrorHandler("Please enter Email and Password you little snack", 400)
    );
  }
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(new ErrorHandler("invalid email or password"));
  }

  //// COME BACK TO THIS AS IT MIGHT NOT WORK AT ALL
  /// FOR REGISTERED USER TO LOG IN
  const isPasswordMatched = await user.comparePassword(password);
  if (!isPasswordMatched) {
    console.log(isPasswordMatched);
    return next(new ErrorHandler("Invalid email or password", 401));
  }
  passToken(user, 200, res);
};
