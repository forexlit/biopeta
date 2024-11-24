// import connectMongoDb from "@/utils/dbConnect";
// import Order from "../../models/Order";

// export default async function addNewOrder(req, res) {
//   try {
//     await connectMongoDb(); // Ensure database connection is complete

//     if (req.method === "POST") {
//       const newOrder = new Order({
//         name: "Tautvydas",
//         lastName: "Riekasius",
//         email: "tautvydasriekasius@gmail.com",
//       });

//       const savedOrder = await newOrder.save();
//       res.status(201).json(savedOrder);
//     } else {
//       res.status(405).json({ message: "Method not allowed" });
//     }
//   } catch (error) {
//     console.error("Error saving order:", error);
//     res.status(400).json({
//       message: "Error saving order",
//       error: error.message,
//     });
//   }
// }

import clientPromise from "@/utils/dbConnect";

export default async function CreateLead(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("cortiway");
    const data = req.body;

    const post = await db.collection("cortiway").insertOne(data);

    res.json(post);
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
}
