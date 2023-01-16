const express = require("express");
const app = express();
const cors = require("cors");
const authRoute = require("./routes/authRoute");
const auth = require("./middleware/auth.js");
const passport = require("passport");
const localStrategy = require("passport-local");
const User = require("./models/userModel");
const bodyParser = require("body-parser");

app.use(express.json());
app.use(cors());

// COME BACK TO THIS FOR AUTH

/* app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//app.use(auth.initialize());
// Passport Config
//passport.use(new localStrategy(User.authenticate()));
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(authRoute); */

const product = require("./routes/productRoute");
const order = require("./routes/orderRoute");

app.use("/api/v1", product);
app.use("/api/v1", order);

module.exports = app;
