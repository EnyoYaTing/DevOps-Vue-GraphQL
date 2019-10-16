const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

require('./dbConfig')
const { typeDef: tableTypeDef, resolvers: tableResolvers } = require('./graphSchema/tableSchema')
const { typeDef: resultTypeDef, resolvers: resultResolvers } = require('./graphSchema/resultSchema')



// If you had Query fields not associated with a
// specific type you could put them here
const defultQuery = `
  type Query {
    _empty: String
  }
  enum SortDirection{
      ASC,
      DESC
  }
`;
const defultResolvers = {
    SortDirection: {
        ASC: 1,
        DESC: -1
    }
  };


const typeDefs = [defultQuery, tableTypeDef, resultTypeDef]
const resolvers = [defultResolvers,tableResolvers, resultResolvers]

const server = new ApolloServer({ typeDefs, resolvers });
const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
