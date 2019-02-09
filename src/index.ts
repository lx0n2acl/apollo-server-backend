import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./entity/User";
import { ApolloServer, gql } from 'apollo-server';

const typeDefs = gql`
  type Query {
    sayHello: String!
  }
`;

const resolvers = {
  Query: {
    sayHello: () => "what's up",
  },
};

createConnection().then(async connection => {

    const server = new ApolloServer({ typeDefs, resolvers });

    server.listen().then(({ url }) => {
      console.log(`Server ready at ${url}`);
    }); 
    
    
}).catch(error => console.log(error));
