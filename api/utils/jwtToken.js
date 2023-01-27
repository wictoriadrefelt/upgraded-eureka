// create token to save in cookie;
const passToken = (user, statusCode, res) => {
  const token = user.getJWTToken();

  var expiryDate = new Date(Date.now() + 60 * 24 * 3600000);
  res
    .status(statusCode)
    .cookie("token", token, { maxAge: expiryDate, httpOnly: true })
    .json({
      success: true,
      user,
      token,
    });
};

module.exports = passToken;
