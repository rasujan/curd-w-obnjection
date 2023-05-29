/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // truncate all existing tables
  await knex.raw('TRUNCATE TABLE "user" CASCADE');
  await knex.raw('TRUNCATE TABLE "channel" CASCADE');
  await knex.raw('TRUNCATE TABLE "video" CASCADE');

  await knex("channel").insert([
    {
      id: 1,
      name: "test_channel_1",
    },
    {
      id: 2,
      name: "test_channel_2",
    },
    {
      id: 3,
      name: "test_channel_3",
    },
  ]);

  await knex("user").insert([
    {
      id: 1,
      name: "test_user_1",
      email: "user_1@test.com",
      channelId: 1,
    },
    {
      id: 2,
      name: "test_user_2",
      email: "user_2@test.com",
      channelId: 2,
    },
    {
      id: 3,
      name: "test_user_3",
      email: "user_3@test.com",
      channelId: 3,
    },
  ]);

  await knex("video").insert([
    {
      id: 1,
      title: "test_video_1",
      channelId: 1,
    },
    {
      id: 2,
      title: "test_video_2",
      channelId: 1,
    },
    {
      id: 3,
      title: "test_video_3",
      channelId: 2,
    },
    {
      id: 4,
      title: "test_video_4",
      channelId: 3,
    },
  ]);
};
