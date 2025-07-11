require("dotenv").config();

const express = require("express");
const { configureCors } = require("./config/corsConfig");
const {
  requestLogger,
  addTimeStamp,
} = require("./middlewares/customMiddleware");
const { urlVersioniong } = require("./middlewares/apiVersioning");
const { globalErrorHandler } = require("./middlewares/errorHandler");
const { createBasicRateLimiter } = require("./middlewares/rateLimiting");
const app = express();
const port = process.env.PORT || 3000;

const itemRoutes = require("./routes/routes");

app.use(requestLogger);
app.use(addTimeStamp);

app.use(configureCors());
app.use(createBasicRateLimiter(10, 15 * 60 * 100)); // 100 requests per 15 minutes
app.use(express.json());

app.use(urlVersioniong("v1"));
app.use("/api/v1", itemRoutes);
app.use(globalErrorHandler);

app.listen(port, () => {
  console.log("Server is now running on port", port);
});
