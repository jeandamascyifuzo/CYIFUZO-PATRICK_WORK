export const Category = {
    products: ({id: categoryId}, args, {products}) => {
        return products.filter((product) => product.categoryId === categoryId)
    },
    // other way
//     const categoryId = parent.id;
//     return products.filter((product) => product.categoryId === id)
// },
}