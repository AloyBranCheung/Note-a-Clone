require("dotenv").config({ path: ".env" });

const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.static("public"));

const url = process.env.MONGODB_URL;

mongoose.connect(url);

// ********************************  schemas ************************************************
const userSchema = {
  pages: [String],
  username: String,
  password: String,
  displayName: String,
};

const pageSchema = {
  title: String,
  rootNodes: [mongoose.ObjectId], // top-level node i.e. no parent
};

const nodeSchema = {
  parentNode: mongoose.ObjectId, // optional: null if top-level node
  childrenNodes: [mongoose.ObjectId], // children nodes of parent node
  text: String, // content of node
  visible: Boolean, // not collapse = false / collapsed = true
  complete: Boolean, // complete is strike-through; strike-through if complete = true vice versa
};

// ********************************  models  ************************************************
const User = mongoose.model("users", userSchema);
const Page = mongoose.model("pages", pageSchema);
const Node = mongoose.model("nodes", nodeSchema);

// ******************************** GET ********************************

// ******************************** POST ********************************

// ******************************** PATCH ********************************

// ******************************** DELETE ********************************

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
