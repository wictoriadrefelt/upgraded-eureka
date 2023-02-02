const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
app.use(express.json());

app.post("/send-email", (req, res) => {
  const { name, email, phone, message } = req.body;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "freddzone@gmail.com",
      pass: "",
    },
  });
  const mailOptions = {
    from: email,
    to: "freddzone@gmail.com",
    subject: "New Message from " + name,
    text: "Phone: " + phone + "\nMessage: " + message,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.send("Email sent: " + info.response);
    }
  });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
