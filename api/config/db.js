const { default: mongoose } = require("mongoose");

// sets up connection for mongodb

const connection = () => {
  mongoose.set("strictQuery", false);

  mongoose
    .connect(
      `mongodb+srv://user21:sommarkatt@cluster0.erd1mda.mongodb.net/test?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then((data) => {
      console.log(`mongo connection established on ${data.connection.host}`);
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = connection;
