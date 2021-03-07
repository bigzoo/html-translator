import * as dotenv from 'dotenv'

dotenv.config()

const axios = require('axios').default
const uuid = require('uuid')
const subscriptionKey = process.env.MS_TRANSLATOR_KEY_1
const endpoint = 'https://api.cognitive.microsofttranslator.com'
const location = 'westus2'

async function translate (input: String) {
  try {
    const response = await axios({
      baseURL: endpoint,
      url: '/translate',
      method: 'post',
      headers: {
        'Ocp-Apim-Subscription-Key': subscriptionKey,
        'Ocp-Apim-Subscription-Region': location,
        'Content-type': 'application/json',
        'X-ClientTraceId': uuid.v4().toString()
      },
      params: {
        'api-version': '3.0',
        from: 'en',
        to: ['pt', 'it', 'sw'],
        textType: 'html',
        includeSentenceLength: true
      },
      data: [{
        text: input
      }],
      responseType: 'json'
    })

    return response.data[0]
  } catch (error) {
    return { error }
  }
}

export { translate }
