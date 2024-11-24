import axios from "axios";

export default async function createSubscriber(req, res) {
  try {
    const options = {
      method: "GET",
      url: "https://api.mailerlite.com/api/v2/groups",
      params: { limit: "100", offset: "0", filters: "null" },
      headers: {
        accept: "application/json",
        "X-MailerLite-ApiDocs": "true",
        "X-MailerLite-ApiKey": "",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
    res.status(200).json({ message: "Subscriber created" });
  } catch (error) {
    res.status(400).json({
      message: "Error creating subscriber",
      error: error,
    });
  }
}
