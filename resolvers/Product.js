export const Product = {
    category: ({categoryId}, args, {categories}) => {
        return categories.find((category) => category.id === categoryId)
    }
    // other way
    // category: (parent, args, {categories}) => {
    //     const categoryId = parent.categoryId;
    //     // otherway
    //     return categories.find((category) => category.id === categoryId)
    // }
}