// environment variables setup
const path = require("path");

const ENV = process.env.NODE_ENV || "development";
const PATH = path.resolve(__dirname, "../.env." + ENV);

require("dotenv").config({ path: PATH });



//Dependencies
const express = require("express");
const bodyparser = require("body-parser");
const helmet = require("helmet");
const cors = require("cors");


//Creating an Express server
const app = express();
const PORT = process.env.PORT || 8001;

//PG database client/connection setup
// const { Pool } = require('pg')
// const dbParams = require('./db/index.js');
// console.log("dbparams:",dbParams)
// const db = new Pool(dbParams);

// db
//   .connect()
//   .catch((e) => console.log(`Error connecting to Postgres server:\n${e}`));


  app.use(cors());
  app.use(helmet());
  app.use(bodyparser.json());
  app.use(bodyparser.urlencoded({ extended: true }));
 
  

//Route path variables
const indexRoutes = require("./routes/index");
const neighbourhoodRoutes = require("./routes/neighbourhood");

  //Routes
  app.use("/", indexRoutes);
  // app.use("/neighbourhood", neighbourhoodRoutes(db));
  


  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}.`);
  });
  

  // app.close = function () {
  //   return db.end();
  // };


 

