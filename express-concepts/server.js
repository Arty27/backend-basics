require("dotenv").config();
const cors = require("cors");
const express = require("express");
const { configureCors } = require("./config/corsConfig");
const {
  requestLogger,
  addTimeStamp,
} = require("./middlewares/customMiddleware");
const { globalErrorHandler } = require("./middlewares/errorHandler");
const app = express();
const port = process.env.PORT || 3000;

app.use(requestLogger);
app.use(addTimeStamp);

app.use(configureCors());
app.use(express.json());
app.use(globalErrorHandler);
app.listen(port, () => {
  console.log("Server is now running on port", port);
});
