import { gql } from 'apollo-server'

export const typeDefs = gql

`
    type Query{
        # hello: String
        # Array: [String]
        products : [Product!]!
        product(id: ID!): Product
        categories: [Category!]!
        category(id: ID!): Category 
    }

    type Product{
        id: ID
        name: String!
        description: String!
        image: String
        quantity: Int!
        price: Float!
        onSale: Boolean!
         # include a cotegory type in the product ==association
         category: Category
    }

    type Category{
        id: ID
        name: String!
        # include a product type in the categories ==association
        products: [Product!]!
    }
`;