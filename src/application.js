//Dependencies
const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const helmet = require("helmet");
const cors = require("cors");
const path = require("path");


//Route path variables
const indexRoutes = require("./routes/index");
const neighbourhoodRoutes = require("./routes/neighbourhood");


//PG database client/connection setup
const { Pool } = require('pg')
const dbParams = require('./db/index.js');
console.log("dbparams:",dbParams)
const db = new Pool(dbParams);

db
  .connect()
  .catch((e) => console.log(`Error connecting to Postgres server:\n${e}`));


module.exports = function application (ENV){

  app.use(cors());
  app.use(helmet());
  app.use(bodyparser.json());
  app.use(bodyparser.urlencoded({ extended: true }));
 
  //Routes
  app.use("/", indexRoutes);
  app.use("/neighbourhood", neighbourhoodRoutes(db));


  app.close = function () {
    return db.end();
  };

  return app;
}

  


 


 

