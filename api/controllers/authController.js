/* const express = require("express");
const User = require("../models/userModel");
const config = require("../config.js");
const jwt = require("jwt-simple");

exports.login = function (req, res) {
  console.log("worked");
  User.findOne({ email: req.body.email }, (err, user) => {
    if (err) {
      console.log("error occured");
    } else {
      const payload = {
        id: user._id,
      };
      const token = jwt.encode(payload, config.jwtSecret);
      res.json({
        token: token,
      });
    }
    exports.register = function (req, res) {
      User.register(
        new User({ name: req.body.name, username: req.body.username }),
        req.body.password,
        function (err, msg) {
          if (err) {
            res.send(err);
          } else {
            res.send({ message: "Successful" });
          }
        }
      );
    };
  });
};
 */
