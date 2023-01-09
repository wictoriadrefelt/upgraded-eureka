const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const product = require("./routes/productRoute");
const order = require("./routes/orderRoute");

app.use("/api/v1", product);
app.use("/api/v1", order);

module.exports = app;
