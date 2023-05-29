const User = require("../db/models/user");

class UserDAO {
  listAll() {
    return User.query();
  }
  findById(id) {
    // return User.query().findById(id).withGraphFetched("channels");
    return User.query().findById(id);
  }
}

module.exports = new UserDAO();
