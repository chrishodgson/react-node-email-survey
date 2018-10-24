const mongoose = require("mongoose");
const keys = require("./config/keys");
require("./models/Survey");
mongoose.connect(
  keys.mongoURI,
  { useNewUrlParser: true }
);
const Survey = mongoose.model("surveys");
