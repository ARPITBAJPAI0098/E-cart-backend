const { err } = require("console");
const express = require("express");
const server = express();
const mongoose = require("mongoose");
const { createProduct } = require("./Controller/Product");
//connection of mongoose

//middlewares
server.use(express.json);
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
  console.log("database connected");
}

server.get("/", (req, res) => {
  res.send({ status: "success" });
});
server.post("/products", createProduct);

server.listen(8080, () => {
  console.log("server started");
});
