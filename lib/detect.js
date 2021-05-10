require('dotenv').config()

const axios = require('axios').default
const uuid = require('uuid')
const subscriptionKey = process.env.MS_TRANSLATOR_KEY_1
const endpoint = 'https://api.cognitive.microsofttranslator.com'
const location = 'westus2'

async function detect (text) {
  try {
    const response = await axios({
      baseURL: endpoint,
      url: '/detect',
      method: 'post',
      headers: {
        'Ocp-Apim-Subscription-Key': subscriptionKey,
        'Ocp-Apim-Subscription-Region': location,
        'Content-type': 'application/json',
        'X-ClientTraceId': uuid.v4().toString()
      },
      params: {
        'api-version': '3.0'
      },
      data: [{
        text
      }],
      responseType: 'json'
    })

    return response.data
  } catch (error) {
    return { error }
  }
}

module.exports = { detect }
