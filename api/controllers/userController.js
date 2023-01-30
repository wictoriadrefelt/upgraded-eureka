const User = require("../models/userModel");
const ErrorHandler = require("../utils/errorhandler");
const passToken = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail");

// user registration
exports.registerUser = async (req, res, next) => {
  const { firstName, email, password } = req.body;

  const user = await User.create({
    firstName,
    email,
    password,
  });

  console.log(user, "user", req.body, "req.bod");
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
  console.log(req.body, "bod");

  console.log(email, password);

  if (!email || !password) {
    return next(new ErrorHandler("Please Enter Email & Password", 400));
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new ErrorHandler("Invalid email or password, no user", 401));
  }

  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    console.log(isPasswordMatched, "false mf");
    return next(
      new ErrorHandler("Invalid email or password, so fuck you", 401)
    );
  }

  passToken(user, 200, res);
};

exports.logout = async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Logged out",
  });
};

// Forgot Password
exports.forgotPassword = async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return next(new ErrorHandler("User not found", 404));
  }

  // Get ResetPassword Token
  const resetToken = user.getResetPasswordToken();

  await user.save({ validateBeforeSave: false });

  const resetPasswordUrl = `${req.protocol}://${req.get(
    "host"
  )}/password/reset/${resetToken}`;

  const message = `Your password reset token is :- \n\n ${resetPasswordUrl} \n\nIf you have not requested this email then, please ignore it.`;

  try {
    await sendEmail({
      email: user.email,
      subject: ` Password Recovery`,
      message,
    });

    res.status(200).json({
      success: true,
      message: `Email sent to ${user.email} successfully`,
    });
  } catch (error) {
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save({ validateBeforeSave: false });

    return next(new ErrorHandler(error.message, 500));
  }
};

// Reset Password
exports.resetPassword = async (req, res, next) => {
  // creating token hash
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() },
  });

  if (!user) {
    return next(
      new ErrorHandler(
        "Reset Password Token is invalid or has been expired",
        400
      )
    );
  }

  if (req.body.password !== req.body.confirmPassword) {
    return next(new ErrorHandler("Password does not match", 400));
  }

  user.password = req.body.password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;

  await user.save();

  passToken(user, 200, res);
};

exports.updatePassword = async (req, res, next) => {
  const user = User.findById(req.params.id).select("+password");

  // HAVE A LOOK AT THIS. COMPAREPASS IS NOT A FUNC
  const arePasswordsMatching = await user.comparePassword(req.body.oldPassword);

  if (!arePasswordsMatching) {
    return next(new ErrorHandler("Password is incorrect"));
  }
  if (req.body.newPassword !== req.body.confirmPassword) {
    return next(new ErrorHandler("Passwords do not match"));
  }
  user.password = req.body.newPassword;

  await user.save();
  passToken(user, 200, res);
};

exports.getSingleUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return next(
      new ErrorHandler(`User does not exist with Id: ${req.params.id}`)
    );
  }

  res.status(200).json({
    success: true,
    user,
  });
};

exports.deleteUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return next(new ErrorHandler("This user does not exist"));
  }
  await user.remove();
  res.status(200).json({
    success: true,
    message: "user deleted",
  });
};

exports.getUserDetails = async (req, res, next) => {
  const user = await User.findById(req.user.id);

  res.status(200).json({
    success: true,
    user,
  });
};
