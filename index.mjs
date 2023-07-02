import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import express from 'express';
import http from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';
import resolvers from './src/graphql/resolvers/resolvers.js';
import typeDefs from './src/graphql/schema/schema.js';
import dotenv from 'dotenv'
import dbConnect from './src/database/db.js';


dotenv.config();
const app = express();
dbConnect();
const httpServer = http.createServer(app);
const server= new ApolloServer({
  typeDefs,
    resolvers,
    plugins: [
      ApolloServerPluginDrainHttpServer({httpServer})],
    
})
await server.start();

app.use(cors(),
bodyParser.json(),
expressMiddleware(server),)

const PORT = process.env.PORT || 4000;  

await new Promise((resolve) => httpServer.listen(`${PORT}`,resolve));
console.log(`Server listening on http://localhost:${PORT}`);
