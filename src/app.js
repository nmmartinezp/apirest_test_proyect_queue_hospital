const express = require("express");
const config = require("./config");
const morgan = require("morgan");
const pgSequelize = require("./database/pgsqlQueue");
const { errors, response } = require("./middleware/error");
const queueRouter = require("./routes/queueRoutes");

const app = express();

//config
app.set("port", config.app.port);

//Verify database connection
pgSequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

//middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use('/queue', queueRouter);

//middlware errors
app.use(errors);
app.use(response);

module.exports = app;
