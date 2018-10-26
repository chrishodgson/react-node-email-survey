/* require in this file from console to run ad hoc mongo queries */
const mongoose = require("mongoose");
const keys = require("./config/keys");
require("./models/Survey");
mongoose.connect(
  keys.mongoURI,
  { useNewUrlParser: true }
);
const Survey = mongoose.model("surveys");
