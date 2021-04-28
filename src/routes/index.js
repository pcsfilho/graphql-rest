const express = require("express");
const routes = express.Router();
const UserController = require("../controller/UserController");
const BookController = require("../controller/BookController");

routes.get("/", (req, res) => {
  return res.send("Hello World!");
});
routes.get("/users", UserController.index);

routes.post("/users/",  async (req, res) => {
  console.log('b: ', req)
  const response = await UserController.store(req?.body)
  return res.send(response)
});

routes.get("/users/:id",  async (req, res) => {
  const response = await UserController.show(req.params.id)
  return res.send(response)
});

routes.get("/books", BookController.index);

routes.post("/books", (req, res) => {
  return res.send(BookController.store)
});

routes.get("/books/:id",  async (req, res) => {
  const response = BookController.show(req.params.id)
  return res.send(response)
});



module.exports = routes;