import "reflect-metadata";
import {createConnection} from "typeorm";
import {Item} from "./entity/Item";
import { ApolloServer, gql, IResolvers } from 'apollo-server';

const typeDefs = gql`
  type Query {
    sayHello: String!
  }  
  
  type Mutation {
    addItem(name: String!) : String
  }
`;

const resolvers : IResolvers = {
  Query: {
    sayHello: () => "what's up",
  },
  Mutation: {
    addItem: async (_, {name}) => {
      await Item.create({name}).save();
    }
  }
};

createConnection().then(async connection => {

    const server = new ApolloServer({ typeDefs, resolvers });

    server.listen().then(({ url }) => {
      console.log(`Server ready at ${url}`);
    }); 
    
    
}).catch(error => console.log(error));
