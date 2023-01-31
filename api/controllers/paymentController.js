const dotenv = require("dotenv");

const stripe = require("stripe")(
  "sk_test_51LgOtTKWccXv1xw6qSObLelDC0S5zifbdX9sA3VXbxPTJGBCeycWQDlQ96AaXanpcRoi97KwuKrnoEVSjhbtGBSQ00jJJQjbXa"
);

exports.processPayment = async (req, res, next) => {
  const myPayment = await stripe.paymentIntents.create({
    amount: req.body.amount,
    currency: "sek",
    metadata: {
      company: "verySerious.ldt",
    },
  });

  res
    .status(200)
    .json({ success: true, client_secret: myPayment.client_secret });
};

exports.sendStripeApiKey = async (req, res, next) => {
  res.status(200).json({ stripeApiKey: process.env.STRIPE_API_KEY });
};
