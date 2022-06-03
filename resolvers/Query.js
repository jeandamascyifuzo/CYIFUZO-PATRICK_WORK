export const Query = {
    // hello: () => {
    //     return "Hello World!!!!"
    // },
    // Array: () => {
    //     return ["it", "gonna", "work", "as", "expected", "cool"]
    // },
    products: (parent, args, { products }) => {
        return products
    },
    product: (parent, { id }, { products }) => {
        return products.find((product) => product.id === id)
        // otherway
        // const { id } = args;
        // return products.find((product) => product.id === id)
    },
    categories: (parent, args, { categories }) => categories,
    category: (parent, { id }, { categories }) => {
        return categories.find((category) => category.id === id)
    },
}