const { prisma } = require("./generated/prisma-client");
const { GraphQLServer } = require("graphql-yoga");
const Mutation = require("./resolvers/mutation");
const Subscription = require("./resolvers/subscription");

const resolvers = {
  Query: {
    users() {
      return prisma.users();
    },
    pullRequests() {
      return prisma.pullRequests();
    }
  },
  Mutation,
  Subscription
};

const server = new GraphQLServer({
  typeDefs: "./schema.graphql",
  resolvers,
  playground: false,
  context: request => {
    return {
      ...request,
      prisma
    };
  }
});
server.start(() => console.log("Server is running on http://localhost:4000"));
