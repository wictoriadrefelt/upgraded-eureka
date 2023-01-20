// create token to save in cookie;
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });

const passToken = (user, statusCode, res) => {
  const token = user.getJWTToken();

  var expiryDate = new Date(Date.now() + 60 * 24 * 3600000);
  console.log(expiryDate);

  console.log(typeof expires);
  console.log(options);
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
