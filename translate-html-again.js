// https://docs.microsoft.com/en-us/azure/cognitive-services/translator/quickstart-translator?tabs=nodejs#dictionary-examples-translations-in-context

require('dotenv').config()

const fs = require('fs')
const path = require('path')
const hubdown = require('hubdown')
const axios = require('axios').default
const uuid = require('uuid')
const subscriptionKey = process.env.MS_TRANSLATOR_KEY_1
const endpoint = 'https://api.cognitive.microsofttranslator.com'
const location = 'westus2'

async function main () {
  const markdown = fs.readFileSync(path.join(__dirname, 'README.md'), 'utf8')
  const { content: html } = await hubdown(markdown)

  axios({
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
      to: ['pt', 'es', 'sw', 'ja', 'zh'],
      textType: 'html',
      includeSentenceLength: true
    },
    data: [{
      text: html
    }],
    responseType: 'json'
  }).then(function (response) {
    console.log(JSON.stringify(response.data, null, 4))
  })
  

}
main() 
