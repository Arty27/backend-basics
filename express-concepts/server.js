require("dotenv").config();
const cors = require("cors");
const express = require("express");
const { configureCors } = require("./config/corsConfig");

const app = express();
const port = process.env.PORT || 3000;

app.use(configureCors());
app.use(express.json());

app.listen(port, () => {
  console.log("Server is now running on port", port);
});
