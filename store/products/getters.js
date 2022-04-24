export const getProducts = state => state.products

export const getProductById = state => id => {
    return state.products.filter(product => product.id === id)
}