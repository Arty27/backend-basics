require("dotenv").config();
const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");

const typeDefs = require("./graphql/schema");
const resolvers = require("./graphql/resolver");

const connectToDb = require("../database/db");

async function startServer() {
  await connectToDb();
  const server = new ApolloServer({ typeDefs, resolvers });

  const { url } = await startStandaloneServer(server, {
    listen: { port: process.env.PORT },
  });

  console.log("Server ready at:", url);
}

startServer();
