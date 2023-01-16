const User = require("../models/userModel");

exports.registerUser = async (req, res, next) => {
  const { firstname, lastname, email, password } = req.body;

  const user = await User.create({ firstname, lastname, email });
};
res.status(201).json({
  success: true,
  user,
});
