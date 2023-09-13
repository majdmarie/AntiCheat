import axios from 'axios';

const apiKey = 'YOUR_MICROSOFT_API_KEY';
const endpoint = 'https://YOUR_MICROSOFT_ENDPOINT.cognitiveservices.azure.com/text/analytics/v3.0/similar';

async function checkSimilarityWithMicrosoft(text) {
  const headers = {
    'Content-Type': 'application/json',
    'Ocp-Apim-Subscription-Key': apiKey,
  };

  const requestBody = {
    documents: [
      {
        id: '1',
        text,
      },
    ],
  };

  try {
    const response = await axios.post(endpoint, requestBody, { headers });
    return response.data;
  } catch (error) {
    console.error('Microsoft API Error:', error);
    throw error;
  }
}
