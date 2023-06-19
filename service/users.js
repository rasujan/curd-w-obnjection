const userDAO = require("../dao/usersDAO");

class UserServices {
  listUsers = () => {
    const users = userDAO.listAll();
    return users;
  };
  getUser = (id) => {
    return userDAO.findById(id);
  };
}

module.exports = new UserServices();
