
const express = require("express");
const bodyparser = require("body-parser");
const helmet = require("helmet");
const cors = require("cors");
const app = express();
const db = require("./db");


//Route path variables
const indexRoutes = require("./routes/index");
const neighbourhoodRoutes = require("./routes/neighbourhood");


module.exports = function application(
  ENV
) {
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
};
