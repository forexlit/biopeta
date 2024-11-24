const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  const item = parseInt(req.query.option, 10); // Convert item to a number

  if (req.method === "POST") {
    if (!item) {
      return res.status(400).json({ error: "Missing or invalid item" });
    }

    if (item === 1) {
      try {
        // Create Checkout Sessions from body params.
        const session = await stripe.checkout.sessions.create({
          line_items: [
            {
              price: "price_1PzdLeHMZQaqZoc8NusX15CP",
              quantity: 1,
            },
          ],
          mode: "subscription",
          success_url: `${req.headers.origin}/success`,
          cancel_url: `${req.headers.origin}/summary`,
        });
        res.redirect(303, session.url);
      } catch (err) {
        res.status(err.statusCode || 500).json(err.message);
      }
    }

    if (item === 2) {
      try {
        // Create Checkout Sessions from body params.
        const session = await stripe.checkout.sessions.create({
          line_items: [
            {
              price: "price_1PzySjHMZQaqZoc8Yf1YdAOe",
              quantity: 1,
            },
          ],
          mode: "subscription",
          success_url: `${req.headers.origin}/success`,
          cancel_url: `${req.headers.origin}/summary`,
        });
        res.redirect(303, session.url);
      } catch (err) {
        res.status(err.statusCode || 500).json(err.message);
      }
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
