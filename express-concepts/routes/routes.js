const express = require("express");
const { asyncHandler, APIError } = require("../middlewares/errorHandler");

const router = express.Router();

const items = [
  {
    id: 1,
    name: "Item1",
  },
  {
    id: 2,
    name: "Item2",
  },
  {
    id: 3,
    name: "Item3",
  },
  {
    id: 4,
    name: "Item4",
  },
];

router.get(
  "/items",
  asyncHandler(async (req, res) => {
    res.json(items);
  })
);

router.post(
  "/items",
  asyncHandler(async (req, res) => {
    if (!req.body.name) {
      throw new APIError("Item name is required! Please add a name", 400);
    }

    const newItem = {
      id: items.length + 1,
      name: req.body.name,
    };

    items.push(newItem);
    res.status(201).json(newItem);
  })
);

module.exports = router;
