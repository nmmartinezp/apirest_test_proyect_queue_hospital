const express = require("express");
const morgan = require("morgan");

const config = require("./config");
const pgSequelize = require("./database/pgsqlQueue");
const { errors, response } = require("./middleware/error");

const queueRouter = require("./routes/queueRoutes");
const doctorRouter = require("./routes/doctorRoutes");
const consulRouter = require("./routes/consultingRoomRoutes");
const ticketRouter = require("./routes/ticketRoutes");
const patientRouter = require("./routes/patientRoutes");
const doctorQueueRouter = require("./routes/doctorQueueRoutes");

require("./model");

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

pgSequelize.sync()
.then(() => {
  console.log("Sincronyzed.");
})
.catch((err) => {
  console.error("Unable Sincronyzed:", err);
});

//middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use('/app', queueRouter);
app.use('/app', doctorRouter);
app.use('/app', consulRouter);
app.use('/app', ticketRouter);
app.use('/app', patientRouter);
app.use('/app', doctorQueueRouter);

//middlware errors
app.use(errors);
app.use(response);

module.exports = app;
