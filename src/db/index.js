
let dbParams = {
};
if (process.env.DATABASE_URL) {
  dbParams.connectionString = process.env.DATABASE_URL;
  dbParams.sslmode = require;
} else {
  dbParams = {
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    sslmode:require
  };
}

module.exports = dbParams;