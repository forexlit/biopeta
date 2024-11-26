import clientPromise from "@/utils/dbConnect";

export default async function CreateLead(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("biopeta");
    const data = req.body;

    const post = await db.collection("biopeta").insertOne(data);

    res.json(post);
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
}
