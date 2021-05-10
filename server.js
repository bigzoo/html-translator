require('dotenv').config()

const express = require('express')
const cors = require('cors')
const { translate } = require('./lib/translate')
const { detect } = require('./lib/detect')
const port = Number(process.env.PORT) || 4000
const app = express()
app.use(cors())
app.use(express.json())

app.get('/', async (_req, res) => {
  return res.redirect('https://github.com/zeke/html-translator')
})

app.post('/detect', async (req, res) => {
  const text = req.body.text
  const detected = await detect(text)
  console.log(JSON.stringify(detected, null, 2))
  return res.json(detected)
})

app.post('/translate', async (req, res) => {
  const text = req.body.text
  const languages = req.body.languages
  const translation = await translate(text, languages)
  console.log(JSON.stringify(translation, null, 2))
  return res.json(translation)
})

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`)
})
