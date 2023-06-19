const { Model } = require("objection");
// const Channel = require("./channel");

class User extends Model {
  static get tableName() {
    return "users";
  }

  // static get relationMappings() {
  //   const Channel = require("./channel");

  //   return {
  //     channel: {
  //       relation: Model.BelongsToOneRelation,
  //       modelClass: Channel,
  //       join: {
  //         from: "users.channelId",
  //         to: "channels.id",
  //       },
  //     },
  //   };
  // }
}
module.exports = User;
