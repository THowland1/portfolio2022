import { Handler } from '@netlify/functions';
import nodeFetch from 'node-fetch';

const handler: Handler = async (event, context) => {
  try {
    const response = await nodeFetch(
      'https://api.pushover.net/1/messages.json',
      {
        method: 'POST',
        body: JSON.stringify({
          token: process.env.PUSHOVER_APPLICATION_KEY,
          user: process.env.PUSHOVER_USER_KEY,
          message: 'Someone just went on your web page',
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return {
      statusCode: response.status === 200 ? 200 : 500,
    };
  } catch (error) {
    return {
      statusCode: 500,
    };
  }
};

export { handler };
