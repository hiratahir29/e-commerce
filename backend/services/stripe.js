const Stripe = require("stripe");

const stripe = new Stripe(process.env.STRIPE_SECRET, {
  apiVersion: "2023-10-16",
});

module.exports = stripe;
