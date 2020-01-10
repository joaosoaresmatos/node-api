const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

// App init
const app = express();
app.use(express.json());
app.use(cors()); // make your API public, you can add params to configure this.

// DB init
mongoose.connect("mongodb://192.168.99.100:27017/nodeapi", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
requireDir("./src/models");

// Routes
app.use("/api", require("./src/routes"));

app.listen(3001);
