let passport = require("passport");
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
