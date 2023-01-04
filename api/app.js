const express = require("express");
const app = express();

app.use(express.json());

const product = require("./routes/productRoute");
const order = require("./routes/orderRoute");

app.use("/api/v1", product);
app.use("/api/v1", order);

module.exports = app;
