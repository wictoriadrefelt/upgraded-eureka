const express = require("express");
const app = express();
const cors = require("cors");
//const authRoute = require("./routes/authRoute");
const auth = require("./middleware/auth.js");
const passport = require("passport");
const localStrategy = require("passport-local");
const User = require("./models/userModel");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const path = require("path");
const dotenv = require("dotenv");
var cookies = require("cookie-parser");
app.use(cors());
app.use(cookies());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// THIS REMOVES ALL PRODUCTS

//app.use(cookieParse);

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

/* app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/dist/index.html"));
}); */

/* if (process.env.NODE_ENV !== "PRODUCTION") {
  dotenv.config({ path: path.resolve(__dirname, "./config/.env") });
} */

require("dotenv").config({ path: path.join(__dirname, ".env") });

const product = require("./routes/productRoute");
const order = require("./routes/orderRoute");
const user = require("./routes/userRoute");

app.use("/api/v1", product);
app.use("/api/v1", order);
app.use("/api/v1", user);
module.exports = app;
