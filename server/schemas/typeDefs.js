const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    password: String
    email: String
    balance: Number
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    user: User
  }

  type Mutation {
    addUser(username: String!, password: String!, email: String!): Auth
    updateUser(
      username: String
      email: String
      password: String
      balance: Number
    ): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
