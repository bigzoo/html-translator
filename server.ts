import * as dotenv from 'dotenv'
import * as express from 'express'
import { translate } from './translate'

dotenv.config()

const port = process.env.PORT ?? 4000
const app = express()

app.get('/', async (_req, res) => {
  return res.redirect('https://github.com/zeke/markdown-localization-test')
})

app.get('/translate', async (req, res) => {
  const text: string = req.query.text as string
  const translation = await translate(text)
  return res.json(translation)
})

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`)
})
