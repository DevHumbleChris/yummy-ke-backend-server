require('dotenv').config()
const express = require('express')
const http = require('http')
const cors = require('cors')
const { ApolloServer } = require('apollo-server-express')
const { ApolloServerPluginDrainHttpServer } = require('apollo-server-core')
const { router } = require('./routes')
const typeDefs = require('./schema/typeDefs')
const resolvers = require('./schema/resolvers')

const app = express()
const httpServer = http.createServer(app)
const GRAPHQL_PORT = process.env.GRAPHQL_PORT

// Middlewares.
app.use(cors())
app.use('/rest-api', router)

async function startApolloServer(typeDefs, resolvers) {
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
    await new Promise(resolve => httpServer.listen({ port: GRAPHQL_PORT }, resolve ))
    console.log(`
    🚀 GraphQL Server Up And Running at http://localhost:4000${server.graphqlPath}
    😎 REST API Server Up And Running at http://localhost:4000/rest-api
    `)
}

startApolloServer(typeDefs, resolvers)