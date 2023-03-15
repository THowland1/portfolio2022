import SendGrid from "@sendgrid/mail";
import sanitizeHtml from "sanitize-html";
import type { NextApiRequest, NextApiResponse } from "next";

const BAD_REQUEST = 400;
const METHOD_NOT_ALLOWED = 405;
const INTERNAL_SERVER_ERROR = 500;
const SUCCESS = 200;
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(METHOD_NOT_ALLOWED);
  }

  let { name, email, message } = req.body;
  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string"
  ) {
    console.error("");
    return BAD_REQUEST;
  }

  name = sanitizeHtml(name);
  email = sanitizeHtml(email);
  message = sanitizeHtml(message);

  try {
    SendGrid.setApiKey(process.env.SENDGRID_API_KEY || "");
    const msg = {
      to: "tomhowland9@gmail.com", // Change to your recipient
      from: "tomhowland9@gmail.com", // Change to your verified sender
      subject: `${name} sent a message on the website`,
      html: /* html */ `<h1>${name} sent a message on the website</h1>
      <h3>Email</h3>
      <p>${email ? email : "<em>not given</em>"}</p>
      <h3>Message</h3>
      <p>${message ? message : "<em>not given</em>"}</p>
      `,
    };
    await SendGrid.send(msg);
    console.log("Email sent");
    return res.status(SUCCESS);
  } catch (error) {
    console.error(error);
    return res.status(INTERNAL_SERVER_ERROR);
  }
}
