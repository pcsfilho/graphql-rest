const books = require("../model/book");

class BookController {
  async store(req, res) {
    const data = await books.BookSchema.create(req.body);
    return res.json(data);
  }
  async index(req, res) {
    const data = await books.BookSchema.find({});
    return res.json(data);
  }
  async show(id) {
    const data = await users.BookSchema.find({_id:id});
    return data;
  }
}

module.exports = new BookController();