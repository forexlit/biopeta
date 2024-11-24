import axios from "axios";

export async function sendEvent(pixelId, apiVersion, accessToken, eventData) {
  const url = `https://graph.facebook.com/${apiVersion}/${pixelId}/events?access_token=${accessToken}`;

  try {
    const response = await axios.post(url, eventData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("Event sent successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error sending event:", error);
    throw error;
  }
}
