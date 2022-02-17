const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/mustafa", () => {
  console.log("db connected");
});
