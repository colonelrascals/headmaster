// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    },
    useNullAsDefault: true,
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/src-backend/db/migrations`
    },
    seeds: {
      directory: `${__dirname}/src-backend/db/seeds`
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/src-backend/db/migrations`
    },
    seeds: {
      directory: `${__dirname}/src-backend/db/seeds`
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/src-backend/db/migrations`
    },
    seeds: {
      directory: `${__dirname}/src-backend/db/seeds`
    }
  }

}
