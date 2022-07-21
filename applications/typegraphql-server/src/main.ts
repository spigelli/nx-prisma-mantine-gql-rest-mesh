import 'reflect-metadata';
import { resolvers } from '@qrscribe/typegraphql';
import { createContext } from '@qrscribe/prisma';
import { ApolloServer, ServerInfo } from 'apollo-server';
import { buildSchema } from 'type-graphql';
import type { GraphQLSchema } from 'graphql';

const log = console.info;

type OutputInfo = Omit<ServerInfo, 'server'>;

export async function buildTypeGraphqlSchema() {
  return await buildSchema({
    resolvers,
    emitSchemaFile: true,
  });
}

export async function startApolloServer(
  executableSchema: GraphQLSchema
): Promise<OutputInfo> {
  const { prisma } = await createContext({});
  const server = new ApolloServer({
    schema: executableSchema,
    context: () => ({ prisma }),
  });

  const outputInfo = {
    ...(await server.listen(4444)),
    server: undefined,
  } as OutputInfo;

  return outputInfo;
}

export async function main() {
  log('🛠️ Building TypeGraphQL schema...');
  const schema = await buildTypeGraphqlSchema();
  log('✅ TypeGraphQL schema built.');
  log('🔄 Starting Apollo server...');
  const serverInfo = await startApolloServer(schema);
  log('✅ Apollo server started with properties:');
  console.table(serverInfo);
}

await main();
