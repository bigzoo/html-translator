require('dotenv').config()

const axios = require('axios').default
const uuid = require('uuid')
const subscriptionKey = process.env.MS_TRANSLATOR_KEY_1
const endpoint = 'https://api.cognitive.microsofttranslator.com'
const location = 'westus2'

axios({
  baseURL: endpoint,
  url: '/dictionary/examples',
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
    to: 'es'
  },
  data: [{
    text: 'shark',
    translation: 'tiburón'
  }],
  responseType: 'json'
}).then(function (response) {
  console.log(JSON.stringify(response.data, null, 4))
})
