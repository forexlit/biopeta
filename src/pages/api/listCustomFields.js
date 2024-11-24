import axios from "axios";
export default async function listCustomFields(req, res) {
  const url = `https://api.getresponse.com/v3/custom-fields`;
  const headers = {
    "Content-Type": "application/json",
    "X-Auth-Token": `api-key ${process.env.GETRESPONSE_KEY}`,
  };

  try {
    const response = await axios.get(url, { headers });
    console.log("Custom Fields:", response.data);
  } catch (error) {
    console.error(
      "Error fetching custom fields:",
      error.response?.data || error.message
    );
  }
}
