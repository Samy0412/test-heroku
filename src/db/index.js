
let dbParams = {
  connectionString = "postgres://grxbyxtblwrryf:a828f1d1c4b42ff747eb43d1290d31daa63e099261e24625a368d237188d27eb@ec2-34-195-233-155.compute-1.amazonaws.com:5432/d3eoakaofaq40a"
};
// if (process.env.DATABASE_URL) {
//   dbParams.connectionString = process.env.DATABASE_URL;
//   dbParams.sslmode = require;
// } else {
//   dbParams = {
//     host: process.env.PGHOST,
//     port: process.env.PGPORT,
//     user: process.env.PGUSER,
//     password: process.env.PGPASSWORD,
//     database: process.env.PGDATABASE,
//     sslmode:require
//   };
// }

module.exports = dbParams;