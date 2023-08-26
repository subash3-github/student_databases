const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: "true" }));
const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://subash:subash482@sensor.v5itlge.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("database connected successfully");
  })
  .catch((e) => {
    console.log(e);
  });
const schema = new mongoose.Schema({
  Roll_number: String,
  Name: String,
  Depatrment: String,
  Date_of_birth: String,
  year: String,
});
const data = new mongoose.model("data", schema);
app.post("/retdata", () => {
  res.send("request arrived");
  data
    .find({
      rno: req.body.rno,
    })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
  if (!req.body.rno) {
    res.send("no matches found");
  }
});
app.listen(3500, () => {
  console.log("server is on");
});
