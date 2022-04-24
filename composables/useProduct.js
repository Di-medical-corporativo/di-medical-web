import { useStore, computed, ref } from '@nuxtjs/composition-api'
const useProduct = () => {
    const store = useStore()

    const loading = ref(false)
    const getProducts = async () => {
        try {
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
    
    return {
        getProducts,
        products,
        loading,
        getProductById
    }
}

export default useProduct