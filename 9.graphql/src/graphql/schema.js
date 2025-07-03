// This file will have the structure details of the data
const { gql } = require("graphql-tag");

// Data types provided by graphql - String,Int,Float, Boolean and ID
const typeDefs = gql`
  type Product {
    id: ID!
    title: String!
    price: Float!
    category: String!
    inStock: Boolean!
  }

  type Query {
    products: [Product!]!
    product(id: ID!): Product
  }

  type Mutation {
    addProduct(
      title: String!
      price: Float!
      category: String!
      inStock: Boolean!
    ): Product

    deleteProduct(id: ID!): Boolean

    updateProduct(
      id: ID!
      title: String
      price: Float
      category: String
      inStock: Boolean
    ): Product
  }
`;

module.exports = typeDefs;
