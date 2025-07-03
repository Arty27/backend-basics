const express = require("express");
const app = express();
const port = 3000;
const products = [
  {
    id: 1,
    title: "Hello",
  },
  {
    id: 2,
    title: "Boom",
  },
];

app.get("/", (req, res) => {
  res.send("Hello Artemis ");
});

app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/product/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  try {
    const result = products.find((r) => r.id === productId);
    console.log(result);
    if (result === undefined) {
      throw new Error("Product not found");
    }
    res.json(result);
  } catch (err) {
    res.status(404).send(err.message);
  }
});

app.listen(port, () => {
  console.log("Server lisitening on port 3000");
});
