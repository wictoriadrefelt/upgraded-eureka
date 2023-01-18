const { connect } = require("http2");
const app = require("./app");
const dotenv = require("dotenv");
const path = require("path");

if (process.env.NODE_ENV !== "PRODUCTION") {
  dotenv.config({ path: path.resolve(__dirname, "./config/.env") });
}

let PORT = process.env.VITE_PORT;

if (PORT == null || PORT == "") {
  PORT = 3001;
}

dotenv.config({ path: "api/config/.env" });

const connection = require("./config/db");

// connect to db
connection();

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
