import { ApolloServer } from 'apollo-server'

import { typeDefs } from './schema.js';
import { Query } from './resolvers/Query.js'
import { Category } from './resolvers/Category.js'
import { Product } from './resolvers/Product.js'
import { products, categories } from './data.js'

const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Query,
        Category,
        Product
    },
    context:{
        products,
        categories
    }
})
server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
})
