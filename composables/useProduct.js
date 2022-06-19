import { useStore, computed, ref } from '@nuxtjs/composition-api'
const useProduct = () => {
    const store = useStore()
    const loading = computed(() => store.getters['products/getLoading'])
    const products = computed(() => store.getters['products/getProducts'])

    const getProducts = async () => {
        try {
            if(products.length >= 0) {
                console.log('No hace doble peticion');
                return
            } 
            await store.dispatch('products/getProducts')
        } catch (error) {
            return {
                ok: false
            }
        }
    }

    const getProductById = (id) => {
        return store.getters['products/getProductByName'](id)   
    }

    const getProductByName = async (name) => {
        try {
            if(products.length > 0) {
                return store.getters['products/getProductByName'](id)  
            }
            return await store.dispatch('products/getProductByName', name)
        } catch (error) {
            return error
        } 
    }

    const getRecommendedProducts = async (id) => {
        try {
            if(products.length > 0) {
                return store.getters['products/getProductByName'](id)  
            }
            return await store.dispatch('products/getProductsRecommended', id)
        } catch (error) {
            return {
                ok: false
            }
        }
    }    
    
    const limitProductsResults = (limit = 3) => {
        return store.getters['products/getProducts'].slice(0, 3)
    }

    return {
        getProducts,
        products,
        loading,
        getProductById,
        limitProductsResults,
        getProductByName,
        getRecommendedProducts
    }
}

export default useProduct