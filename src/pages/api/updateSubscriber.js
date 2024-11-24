// import axios from "axios";

// export default async function updateSubscriber(req, res) {
//   //   const { id, concern } = req.body;
//   const id = "134160382522557678";

//   try {
//     const options = {
//       method: "PUT",
//       url: `https://api.mailerlite.com/api/v2/subscribers/${id}`,
//       headers: {
//         accept: "application/json",
//         "X-MailerLite-ApiDocs": "true",
//         "content-type": "application/json",
//         "X-MailerLite-ApiKey": process.env.MAILERLITE_API_KEY, // Use environment variable
//       },
//       data: {
//         fields: {
//           joined: "Yes",
//         },
//       },
//     };

//     const response = await axios.request(options);
//     res.status(200).json(response.data);
//   } catch (error) {
//     console.error(error);
//     res.status(400).json({
//       message: "Error updating subscriber",
//       error: error.message,
//     });
//   }
// }

import axios from "axios";

export default async function updateSubscriber(req, res) {
  const email = req.query.email; // Get the email from the request body
  console.log(email);
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
          joined: "Yes", // Example of a field you want to update
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
