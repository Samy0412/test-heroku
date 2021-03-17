
let dbParams = {
};
if (process.env.DATABASE_URL) {
  dbParams.connectionString = process.env.DATABASE_URL;
} else {
  dbParams = {
    host: "ls-6a1e60392078f1a3943200850aef0602d1eb53a9.csdsebrve8sw.ca-central-1.rds.amazonaws.com",
    port: "5432",
    user: "dbmasteruser",
    password: "<p6o<kHt(d=c^1)ItYvp,ad=blKbp`wa",
    database: "test",
  };
}

module.exports = dbParams;