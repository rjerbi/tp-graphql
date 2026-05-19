const express = require('express');

const { ApolloServer } = require('@apollo/server');

const { expressMiddleware } = require('@as-integrations/express5');

const { addResolversToSchema } = require('@graphql-tools/schema');

const taskSchema = require('./taskSchema');

const taskResolver = require('./taskResolver');

const app = express();

async function startServer() {

  const schemaWithResolvers = addResolversToSchema({
    schema: taskSchema,
    resolvers: taskResolver,
  });

  const server = new ApolloServer({
    schema: schemaWithResolvers,
  });

  await server.start();

  app.use(
    '/graphql',
    express.json(),
    expressMiddleware(server)
  );

  app.listen(5000, () => {
    console.log('Server running on port 5000');
  });
}

startServer();