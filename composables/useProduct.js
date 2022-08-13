import { useStore, computed, ref } from '@nuxtjs/composition-api'
const useProduct = () => {
    const store = useStore()
    const loading = computed(() => store.getters['products/getLoading'])
    const products = computed(() => store.getters['products/getProducts'])

    const getProducts = async () => {
        try {
            if(products.length >= 0) {
                console.log('No hace doble peticion little update');
                return
            } 
            await store.dispatch('products/getProducts')
        } catch (error) {
            return {
                ok: false
            }
        }
    }

    const getProductById = async (id) => {
        try {
            if(products.length > 0) {
                return store.getters['products/getProductByName'](id)  
            }
            return await store.dispatch('products/getProductByName', id)
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
        return store.getters['products/getProducts'].slice(0, limit)
    }

    return {
        getProducts,
        products,
        loading,
        getProductById,
        limitProductsResults,
        getRecommendedProducts
    }
}

export default useProduct
