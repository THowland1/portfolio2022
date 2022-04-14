import { Handler, HandlerResponse } from '@netlify/functions';
import SendGrid from '@sendgrid/mail';
import sanitizeHtml from 'sanitize-html';

const BAD_REQUEST: HandlerResponse = {
  statusCode: 400,
};
const METHOD_NOT_ALLOWED: HandlerResponse = {
  statusCode: 405,
};
const INTERNAL_SERVER_ERROR: HandlerResponse = {
  statusCode: 500,
};
const SUCCESS: HandlerResponse = {
  statusCode: 200,
};

const handler: Handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return METHOD_NOT_ALLOWED;
  }

  let { name, email, message } = JSON.parse(event.body || '{}');
  if (
    typeof name !== 'string' ||
    typeof email !== 'string' ||
    typeof message !== 'string'
  ) {
    console.error('');
    return BAD_REQUEST;
  }

  name = sanitizeHtml(name);
  email = sanitizeHtml(email);
  message = sanitizeHtml(message);

  try {
    SendGrid.setApiKey(process.env.SENDGRID_API_KEY || '');
    const msg = {
      to: 'tomhowland9@gmail.com', // Change to your recipient
      from: 'tomhowland9@gmail.com', // Change to your verified sender
      subject: `${name} sent a message on the website`,
      html: /* html */ `<h1>${name} sent a message on the website</h1>
      <h3>Email</h3>
      <p>${email ? email : '<em>not given</em>'}</p>
      <h3>Message</h3>
      <p>${message ? message : '<em>not given</em>'}</p>
      `,
    };
    await SendGrid.send(msg);
    console.log('Email sent');
    return SUCCESS;
  } catch (error) {
    console.error(error);
    return INTERNAL_SERVER_ERROR;
  }
};

export { handler };
