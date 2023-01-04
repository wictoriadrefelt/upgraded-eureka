const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema({
  shippingInfo: {
    address: { type: String },
    city: { type: String },
    postcode: { type: Number },
    country: { type: Number },
    phoneNumber: { type: Number },
  },
  itemsOnOrder: [
    {
      name: { type: String },
      price: { type: Number },
      quantity: { type: Number },
      image: { type: String },
      product: {
        type: mongoose.Schema.ObjectId,
        ref: "Product",
        required: true,
      },
    },
  ],

  //TODO --------------- DESSA BÖR VARA REQUIRED OCH HA ETT DEFAULT VALUE
  paymentInfo: {
    id: { type: String },
    status: { type: String },
    paidAt: { type: Date },
    itemsPrice: { type: Number },
    shippingPrice: { type: Number },
    totalPrice: { type: Number },
    orderStatus: { type: String },
    deliveredAt: { type: Date },
  },
});

module.exports = mongoose.model("Order", OrderSchema);
