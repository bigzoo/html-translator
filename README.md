# HTML translator

A Node.js web service that wraps the [Microsoft Translator API].

## Usage

There are two supported endpoints, `/detect` and `/translate`

### Detect

The `/detect` endpoint expects a JSON body with `text`:

```sh
$ curl -s \
  -X POST \
  -d '{"text": "Hello, world"}' \
  -H 'Content-Type: application/json' \
  "https://html-translator.herokuapp.com/translate" | jq
```

Response:

```json
[
  {
    "language": "en",
    "score": 1,
    "isTranslationSupported": true,
    "isTransliterationSupported": false
  }
]
```

### Translate

The `/translate` endpoint expects a JSON body with `text` and an array of target `languages` in two-letter [BCP47] format:

```sh
curl -s \
  -X POST \
  -d '{"text": "Hello, world", "languages": ["it", "es"]}' \
  -H 'Content-Type: application/json' \
  "https://html-translator.herokuapp.com/translate" | jq
```

Response:

```json
[
  {
    "translations": [
      {
        "text": "Salve, mondo",
        "to": "it",
        "sentLen": {
          "srcSentLen": [
            12
          ],
          "transSentLen": [
            12
          ]
        }
      },
      {
        "text": "Hola mundo",
        "to": "es",
        "sentLen": {
          "srcSentLen": [
            12
          ],
          "transSentLen": [
            10
          ]
        }
      }
    ]
  }
]
```

## Development

```sh
npm start
npm run dev
```

This starts a server on localhost:4000

[BCP47]: https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry
[Microsoft Translator API]: https://docs.microsoft.com/en-us/azure/cognitive-services/translator/quickstart-translator?tabs=nodejs
