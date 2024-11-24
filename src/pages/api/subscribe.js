// import axios from "axios";

// export default async function createSubscriber(req, res) {
//   const risk = req.body.risk;
//   let groupId;
//   const concern = req.body.concern;

//   if (concern === "Weight control") {
//     groupId = "133997243689600217";
//   } else if (concern === "Stress levels") {
//     groupId = "133997289535439964";
//   } else if (concern === "Sleep quality") {
//     groupId = "133997282595964593";
//   } else if (concern === "Energy levels") {
//     groupId = "133997235720422430";
//   }
//   console.log(groupId);
//   try {
//     const options = {
//       method: "POST",
//       url: `https://api.mailerlite.com/api/v2/groups/${groupId}/subscribers`,
//       headers: {
//         accept: "application/json",
//         "X-MailerLite-ApiDocs": "true",
//         "content-type": "application/json",
//         "X-MailerLite-ApiKey": process.env.MAILERLITE_API_KEY, // Use environment variable
//       },
//       data: {
//         email: req.body.email,
//         resubscribe: false,
//         autoresponders: true,
//         type: "active",
//         fields: {
//           risk: req.body.risk,
//           score: req.body.score,
//           gender: req.body.gender,
//           concern: req.body.concern,
//         },
//       },
//     };

//     const response = await axios.request(options);
//     res.status(200).json(response.data);
//   } catch (error) {
//     console.error(error);
//     res.status(400).json({
//       message: "Error creating subscriber",
//       error: error.message,
//     });
//   }
// }

import axios from "axios";

export default async function createSubscriber(req, res) {
  const listToken = "jdn45";
  const apiKey = process.env.GETRESPONSE_KEY;

  console.log(req.body);
  const email = req.body.email || "";
  const gender = req.body.gender || "";
  const age = Number(req.body.age) || "";
  const height = req.body.height || "";
  const weight = req.body.weight || "";
  const goalWeight = req.body.goalWeight || "";
  const answers = req.body.answers || "";

  // const email = "zeniusss@gmail.com";
  // const gender = "Male";
  // const age = 35;
  // const height = "20ft 5in";
  // const weight = "200lbs";
  // const goalWeight = "100lbs";
  // const answers = "Testing";

  const url = `https://api.getresponse.com/v3/contacts`;

  // Request payload
  const data = {
    email: email,
    campaign: {
      campaignId: listToken,
    },
    customFieldValues: [
      {
        customFieldId: "psKSPK", // Name of the custom field
        value: [gender], // Array with the value of the field
      },
      {
        customFieldId: "psKx10",
        value: [age], // Convert numbers to strings
      },
      {
        customFieldId: "psKxv5",
        value: [height.toString()],
      },
      {
        customFieldId: "psKxhb",
        value: [weight.toString()],
      },
      {
        customFieldId: "psKxY7",
        value: [goalWeight.toString()],
      },
      // {
      //   customFieldId: "psKxdy",
      //   value: [answers.toString()], // Array of answers
      // },
    ],
  };

  // Configure headers
  const headers = {
    "Content-Type": "application/json",
    "X-Auth-Token": `api-key ${apiKey}`, // Auth header
  };

  try {
    const response = await axios.post(url, data, { headers });
    res.status(200).json({
      success: true,
      message: "Subscriber added successfully",
      data: response.data,
    });
  } catch (error) {
    console.error(
      "Error adding subscriber:",
      error.response?.data || error.message
    );
    res.status(500).json({
      success: false,
      message: "Failed to add subscriber",
      error: error.response?.data || error.message,
    });
  }
}
