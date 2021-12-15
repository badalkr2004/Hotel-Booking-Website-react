const mongoose = require("mongoose");

const mongoDB = "mongodb://localhost:27017/hotel";
mongoose
  .connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("connection to database successful");
  })
  .catch((err) => {
    console.log(err);
  });
