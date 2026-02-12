const express = require("express");
const router = express.Router();
const stripe = require("../services/stripe");

router.post("/create-payment-intent", async (req, res) => {
  try {
    const { orderId, amount, currency } = req.body;

    const paymentIntent = await stripe.paymentIntents.create(
      {
        amount,
        currency,
        capture_method: "manual", // 🔥 separate auth & capture
        metadata: { orderId },
      },
      {
        idempotencyKey: orderId, // 🔥 prevents duplicate payments
      }
    );

    res.json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
