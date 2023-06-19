// Update with your config settings.
const pg = require("pg");

if (process.env.DATABASE_URL) {
  pg.defaults.ssl = { rejectUnauthorized: false };
}
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
const { KnexSnakeCaseMappers } = require("knex");

module.exports = {
  development: {
    client: "postgres",
    connection: {
      host: "0.0.0.0",
      port: 5432,
      database: "alpha",
      user: "rasujan",
      password: "rasujan",
      migrations: {
        tableName: "knex_migrations",
      },
      seeds: {
        directory: "./seeds", // this are initial mock data for development
      },
    },
    searchPath: ["knex", "public"],
    ...KnexSnakeCaseMappers,
  },
};
