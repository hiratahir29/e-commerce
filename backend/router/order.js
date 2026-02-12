

const express = require("express");
const router = express.Router();
const { v4: uuid } = require("uuid");

router.post("/create-order", async (req, res) => {
  const { items, amount, currency } = req.body;

  const order = {
    id: uuid(),
    items,
    amount,
    currency,
    status: "pending", // pending | authorized | captured | failed
  };

  // TODO: Save to DB (or in-memory for now)

  res.json(order);
});

module.exports = router;
