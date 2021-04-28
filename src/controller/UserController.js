const users = require("../model/user");

class UserController {
  async store(body) {
    const data = await users.UserSchema.create(body);
    return data;
  }
  async index(req, res) {
    const data = await users.UserSchema.find({});
    return res.json(data);
  }
  async show(id) {
    const data = await users.UserSchema.findById(id);
    return data;
  }
}

module.exports = new UserController();