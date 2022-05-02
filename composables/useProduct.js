import { useStore, computed, ref } from '@nuxtjs/composition-api'
const useProduct = () => {
    const store = useStore()

    const loading = ref(false)
    const getProducts = async () => {
        try {

            if(store.getters['products/getProducts'].length > 0) {
                return;
            }

            loading.value = true
            await store.dispatch('products/getProducts')
            loading.value = false
        } catch (error) {
            console.log(error);
        }
    }

    const getProductById = (id) => {
        return store.getters['products/getProductById'](id)   
    }
    
    const products = computed(() => store.getters['products/getProducts'])
    
    const limitResults = (limit = 3) => {
        return store.getters['products/getProducts'].slice(0, 3)
    }

    return {
        getProducts,
        products,
        loading,
        getProductById,
        limitResults
    }
}

export default useProduct