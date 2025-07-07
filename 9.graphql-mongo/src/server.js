require("dotenv").config();
const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");

const typeDefs = require("./graphql/schema");
const resolvers = require("./graphql/resolver");
const jwt = require("jsonwebtoken");

const connectToDb = require("../database/db");

async function startServer() {
  await connectToDb();
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: async ({ request }) => {
      console.log("hello");
      const authHeader = request.headers.get("authorization") || "";
      const token = authHeader.split(" ")[1];
      let user = null;
      if (token) {
        try {
          user = jwt.verify(token, process.env.JWT_SECRET);
        } catch (error) {
          console.error("Invalid Token", error.message);
        }
      }
      return { user };
    },
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: process.env.PORT },
  });

  console.log("Server ready at:", url);
}

startServer();
