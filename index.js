const mdast = require('mdast')
const ast = mdast.parse('Some *emphasis*, **strongness**, and `code`.')

console.log(JSON.stringify(ast, null, 2))
