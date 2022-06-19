export const getProducts = state => state.products

export const getProductByName = state => id => {
    const name = id.replace(/-/g, ' ');
    return state.products.filter(product => product.title.toLowerCase() === name)
}

export const getProductTitleById = state => id => {
    const name = id.replace(/-/g, ' ');
    const product = state.products.filter(product => product.title.toLowerCase() === name);
    console.log(state.products, id);
    return state.products.filter(product => product.title.toLowerCase() === name).title
}

export const getLoading = state => state.isLoading