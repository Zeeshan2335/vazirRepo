const mongoose = require("mongoose");

const customersModel = mongoose.model("customers", {
  name: { type: String },
  age: { type: Number },
  city: { type: String },
  mobile: { type: Number },
  custId: { type: String },
});
module.exports = customersModel;
