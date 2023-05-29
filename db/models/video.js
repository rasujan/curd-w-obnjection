const { Model } = require("objection");

class Video extends Model {
  static get tableName() {
    return "videos";
  }
}

module.exports = Video;
