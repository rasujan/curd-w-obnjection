const { Model } = require("objection");

class Channel extends Model {
  static get tableName() {
    return "channels";
  }
}

module.exports = Channel;
