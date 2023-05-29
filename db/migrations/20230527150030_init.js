/**
 * apply changes
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 *
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("channels", (table) => {
      table.increments("id").primary();
      table.string("name").notNullable();
      table.timestamps(true, true);
    })
    .createTable("users", (table) => {
      table.increments("id").primary();
      table.string("name").notNullable();
      table.string("email").notNullable().unique();
      table.integer("channelId").references("id").inTable("channels");
      table.timestamps(true, true);
    })
    .createTable("videos", (table) => {
      table.increments("id").primary();
      table.string("title").notNullable();
      table
        .integer("channelId")
        .notNullable()
        .references("id")
        .inTable("channels");
      table.timestamps(true, true);
    });
};

/**
 * rollback changes
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("videos")
    .dropTableIfExists("users")
    .dropTableIfExists("channels");
};
