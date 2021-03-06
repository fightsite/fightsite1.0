const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    password: String
    email: String
    balance: Int
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    addUser(username: String!, password: String!, email: String!): Auth
    updateUser(email: String!, balance: Int!): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
