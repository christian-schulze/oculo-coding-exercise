const path = require("path");
const express = require("express");
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use("/", express.static(path.join(__dirname, "public")));

server.use(router);
server.listen(8000, () => {
  console.log("Server is running at http://localhost:8000...");
});
