// USE ME TO GET A NON LOGGED IN USER TO NOT BE ABLE TO REACH CERTAIN ROUTES. FOR ADMIN STUFF MAINLY

const ErrorHandler = require("../utils/errorhandler");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

exports.isAuthenticated = async (req, res, next) => {
  const { token } = req.cookies;
  console.log(token);
  if (!token) {
    return next(
      new ErrorHandler(
        "No Access Here, Maybe There Is a Valid Reason For This",
        401
      )
    );
  }

  const decoded = jwt.verify(token, process.env.VITE_SECRET_KEY);
  console.log(VITE_SECRET_KEY);

  req.user = await User.findById(decoded.id);

  next();
};

exports.autharizedRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorHandler(
          `Role:  ${req.user.role} is not allowed to access this resource`,
          403
        )
      );
    }
    next();
  };
};
/* let passport = require("passport");
const passportJwt = require("passport-jwt");
const User = require("../models/userModel");
const config = require("../config.js");
const extractJwt = passportJwt.ExtractJwt;
const Strategy = passportJwt.Strategy;

const params = {
  secretOrKey: config.jwtSecret,
  jwtFromRequest: extractJwt.fromAuthHeaderAsBearerToken("jwt"),
};

module.exports = function () {
  const strategy = new Strategy(params, function (payload, done) {
    const user = User.findById(payload._id, function (err, user) {
      if (err) {
        return done(new Error("UserNotFound"), null);
      } else {
        return done(null, user);
      }
    });
  });
  passport.use(strategy);
  return {
    initialize: function () {
      return passport.initialize();
    },
    authenticate: function () {
      return passport.authenticate(jwt, config.jwtSession);
    },
  };
};
 */
