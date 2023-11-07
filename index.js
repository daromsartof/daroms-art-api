import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import { ApolloServer } from '@apollo/server'
import shemas from './src/schemas/index.js'
import resolvers from './src/resolvers/index.js'
import { startStandaloneServer } from '@apollo/server/standalone';

BigInt.prototype.toJSON = function () {
    return this.toString()
}
dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

const port = process.env.PORT
const server = new ApolloServer({
    typeDefs: shemas,
    resolvers
})

const { url } = await startStandaloneServer(server, {
    listen: { port },
});

console.log(`🚀  Server ready at: ${url}`);