const fs = require('fs')
const path = require('path')

/**
 * @name getTypeDefs
 * @desc Resursively get GraphQL type definitions
 *
 * @param {String} directory the path of the parent directory
 *
 * @returns {String} the type definitions
 */
function getTypeDefs(directory = __dirname) {
  // List all files in the current directory
  const files = fs.readdirSync(directory)

  return files.reduce((acc, file) => {
    // If the file is a directory, call getTypeDefs recursively
    const filePath = path.resolve(directory, file)
    if (fs.lstatSync(filePath).isDirectory()) {
      return acc.concat(`${getTypeDefs(filePath)}\n`)
    }
    if (file.match(/.gql$/)) {
      const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })
      return acc.concat(`${fileContent}\n`)
    }
    return acc
  }, '')
}

module.exports = {
  getTypeDefs,
}
