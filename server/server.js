require("dotenv").config({ path: ".env" });

const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.static("public"));

const url = process.env.MONGODB_URL;

mongoose.connect(url);

const postSchema = {
  title: String,
  content: String,
};

const Post = mongoose.model("panpan", postSchema);

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
