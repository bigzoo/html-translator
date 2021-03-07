# HTML translator

A Node.js web service that wraps the [Microsoft Translator API].

## Development

```sh
npm start
npm run dev
```

This starts a server on localhost:4000

```sh
curl -s "http://localhost:4000/translate?text=hello,%20world" | jq
```

[Microsoft Translator API]: https://docs.microsoft.com/en-us/azure/cognitive-services/translator/quickstart-translator?tabs=nodejs