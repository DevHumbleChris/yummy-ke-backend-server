const express = require('express')
const http = require('http')
const cors = require('cors')
const { ApolloServer } = require('apollo-server-express')
const { ApolloServerPluginDrainHttpServer } = require('apollo-server-core')
const typeDefs = require('./schema/typeDefs')
const resolvers = require('./schema/resolvers')

async function startApolloServer(typeDefs, resolvers) {
    const app = express()
    const httpServer = http.createServer(app)
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        cache: `bounded`,
        csrfPrevention: true,
        plugins: [
            ApolloServerPluginDrainHttpServer({
                httpServer
            })
        ]
    })
    await server.start()
    server.applyMiddleware({
        app,
        path: '/graphql'
    })
    await new Promise(resolve => httpServer.listen({ port: 4000 }, resolve ))
    console.log(`GraphQL Server Up And Running at http://localhost:4000${server.graphqlPath}`)
}

startApolloServer(typeDefs, resolvers)