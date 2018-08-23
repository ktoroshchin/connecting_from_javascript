const settings = require("./settings.json");

module.exports = {
  development: {
    client: "postgresql",
    connection: {
      database: settings.database,
      user: settings.user,
      password: settings.password,
      hostname: settings.hostname,
      port: settings.port,
      ssl: settings.ssl
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "test_db",
      user: "development",
      password: "development"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  production: {
    client: "postgresql",
    connection: {
      database: "test_db",
      user: "development",
      password: "development"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }
};
