require('dotenv').config()
const { ApolloServer } = require('apollo-server')
const ProductHuntAPI = require('./graphql/datasources/productHuntAPI')
const { getResolvers } = require('./graphql/resolvers')
const { getTypeDefs } = require('./graphql/typeDefs')

const server = new ApolloServer({
  typeDefs: getTypeDefs(),
  resolvers: getResolvers(),
  dataSources: () => ({
    productHuntAPI: new ProductHuntAPI(),
  }),
  context: {
    productHuntToken: process.env.PRODUCT_HUNT_DEVELOPER_TOKEN,
  },
})

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
})
