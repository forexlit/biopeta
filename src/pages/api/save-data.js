// import clientPromise from "@/utils/dbConnect";

// export default async function CreateLead(req, res) {
//   try {
//     const client = await clientPromise;
//     const db = client.db("biopeta");
//     const data = req.body;

//     const post = await db.collection("biopeta").insertOne(data);

//     res.json(post);
//   } catch (e) {
//     console.error(e);
//     throw new Error(e).message;
//   }
// }

import clientPromise from "@/utils/dbConnect";

export default async function CreateLead(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const client = await clientPromise;
    const db = client.db("biopeta");
    const data = req.body;

    const post = await db.collection("biopeta").insertOne(data);

    return res.status(200).json(post);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
