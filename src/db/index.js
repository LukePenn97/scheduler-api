const pg = require("pg");

const client = new pg.Client({
  connectionString: process.env.DATABASE_URL || `postgresql://${process.env.PGUSER}:${process.env.PGPASSWORD}@localhost:5432/${process.env.PGDATABASE}`,
  ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false,
});

client
  .connect()
  .catch(e => console.log(`Error connecting to Postgres server:\n${e}`));

module.exports = client;
