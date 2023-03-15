import { NextApiRequest, NextApiResponse } from "next";
import nodeFetch from "node-fetch";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await nodeFetch(
      "https://api.pushover.net/1/messages.json",
      {
        method: "POST",
        body: JSON.stringify({
          token: process.env.PUSHOVER_APPLICATION_KEY,
          user: process.env.PUSHOVER_USER_KEY,
          message: "Someone just clicked on the Heardlify button",
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return res.status(response.status === 200 ? 200 : 500);
  } catch (error) {
    return res.status(500);
  }
}
