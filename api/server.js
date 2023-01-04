const { connect } = require("http2");
const app = require("./app");

const PORT = 3001;

const connection = require("./config/db");

// connect to db
connection();

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
