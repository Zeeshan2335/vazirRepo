const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");
const { json } = require("express");
const customersModel = require("./Models/customersModel");
app.use(express());
app.use(cors());
app.use(json());
mongoose
  .connect("mongodb://localhost:27017/vazirdb")
  .then(() => {
    console.log("db is connected");
  })
  .catch((err) => console.log(err));

app.get("/zishan", (req, res) => {
  res.send({ name: "vazir", age: 22, city: "Nanded", mobile: 8856937765 });
});
app.get("/", async (req, res) => {
  const result = await customersModel.find({});
  res.send(result);
});

app.post("/add", (req, res) => {
  const result = new customersModel(req.body);
  result.save();
  res.send("new customer added successfully!!");
});

app.post("/update", async (req, res) => {
  const result = await customersModel.updateOne(
    { custId: req.body.custId },
    req.body
  );
  res.json(result);
  //   && res.send("customer updated  successfully....!");
});

app.post("/delete", async (req, res) => {
  const result = await customersModel.findOneAndDelete(req.body);
  res.json(result);
  res.send("delete successfully");
});

app.listen(5050, () => {
  console.log("server is");
});

// app.post("/updatecards", async (req, res) => {
//     const result = await crtCardModel.updateOne(
//       { pdId: req.body.pdId },// front end
//       req.body
//     );
//     // {name:""},{name:"syed zeeshan", age:34, city:"nanded"}
//     res.json(result);
//   });
