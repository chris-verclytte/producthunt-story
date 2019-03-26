const fs = require('fs')
const path = require('path')
const { merge } = require('lodash/fp')

/**
 * @name getResolvers
 * @desc Resursively get GraphQL resolvers
 *
 * @param {String} directory the path of the parent directory
 *
 * @returns {Object} an hashmap of resolvers
 */
function getResolvers(directory = __dirname) {
  // List all files in the current directory
  const files = fs.readdirSync(directory)

  return files.reduce((acc, file) => {
    const filePath = path.resolve(directory, file)

    // If it is the current file, ignore it
    if (filePath === __filename) return acc

    // If the file is a directory, call getResolvers recursively
    if (fs.lstatSync(filePath).isDirectory()) {
      return merge(acc, getResolvers(filePath))
    }
    if (file.match(/.js$/)) {
      const resolver = require(filePath) // eslint-disable-line global-require, import/no-dynamic-require
      return merge(acc, resolver)
    }
    return acc
  }, {})
}

module.exports = {
  getResolvers,
}
