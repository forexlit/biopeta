import axios from "axios";

export default async function updateProduct(req, res) {
  const email = req.query.email; // Get the email from the request body
  try {
    const options = {
      method: "PUT",
      url: `https://api.mailerlite.com/api/v2/subscribers/${encodeURIComponent(
        email
      )}`, // Use email instead of ID a
      headers: {
        accept: "application/json",
        "X-MailerLite-ApiDocs": "true",
        "content-type": "application/json",
        "X-MailerLite-ApiKey": process.env.MAILERLITE_API_KEY, // Use environment variable
      },
      data: {
        fields: {
          product: "Yes", // Example of a field you want to update
        },
      },
    };

    const response = await axios.request(options);
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(400).json({
      message: "Error updating subscriber",
      error: error.message,
    });
  }
}
