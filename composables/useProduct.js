import { useStore, computed, ref } from '@nuxtjs/composition-api'
const useProduct = () => {
    const store = useStore()
    const loading = computed(() => store.getters['products/getLoading'])
    const products = computed(() => store.getters['products/getProducts'])

    const getProducts = async () => {
        try {
            await store.dispatch('products/getProducts')
        } catch (error) {
            return {
                ok: false
            }
        }
    }

    const getProductById = (id) => {
        return store.getters['products/getProductById'](id)   
    }

    const getProductByName = async (name) => {
        try {
            loading.value = true
            const productName = await store.dispatch('products/getProductByName', name)
            loading.value = false
            return productName
        } catch (error) {
            return error
        } 
    }

    const getRecommendedProducts = async (id) => {
        try {
            loading.value = true
            const products = await store.dispatch('products/getProductsRecommended', id)
            loading.value = false
            return products
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