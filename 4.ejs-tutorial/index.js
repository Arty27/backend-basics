const express = require("express");
const path = require("path");

const app = express();

// set the view engine as view js
app.set("view engine", "ejs");

// set the directory for the views
app.set("views", path.join(__dirname, "views"));

const products = [
  {
    id: 1,
    title: "Boom1",
  },
  {
    id: 2,
    title: "Boom2",
  },
  {
    id: 2,
    title: "Boom3",
  },
];

app.get("/", (req, res) => {
  res.render("home", { title: "Home", products: products });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About US" });
});

const port = 3000;

app.listen(port, () => {
  console.log("Server is running at port:", port);
});
