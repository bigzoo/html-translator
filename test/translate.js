// const nock = require('nock')
const { translate } = require('../lib/translate')

// nock.disableNetConnect()

describe('translate', () => {
  it('exports a function', () => {
    expect(typeof translate).toBe('function')
  })

  // it('translates a string', async () => {
  //   const translation = await translate('Hello, world!')
  //   console.log(translation)

  //   const mock = nock('https://api.cognitive.microsofttranslator.com')
  //     .post('/translate')
  //     .reply(200, {
  //       license: {
  //         key: 'mit',
  //         name: 'MIT License',
  //         spdx_id: 'MIT',
  //         url: 'https://api.github.com/licenses/mit',
  //         node_id: 'MDc6TGljZW5zZTEz',
  //       },
  //     })
  // })
})
