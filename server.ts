import * as dotenv from 'dotenv'
import * as express from 'express'
import * as cors from 'cors'
import { translate } from './translate'


dotenv.config()

const port = process.env.PORT ?? 4000
const app = express()
app.use(cors())
app.use(express.json())

app.get('/', async (_req, res) => {
  return res.redirect('https://github.com/zeke/html-translator')
})

app.post('/translate', async (req, res) => {
  const text: string = req.body.text as string
  const languages: Array<string> = req.body.languages as Array<string>
  const translation = await translate(text, languages)
  return res.json(translation)
})

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`)
})
