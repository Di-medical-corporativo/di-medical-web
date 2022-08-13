import Vuex from "vuex";
import { createLocalVue } from '@vue/test-utils';

import productsStore from '@/store/products'
import { productState } from '~/test/mock-data/test-products-state'

const createVuexStore = (initialState) => {
    const localvue = createLocalVue()
    localvue.use(Vuex)

    const store = new Vuex.Store({ ...productsStore, state: initialState })
    return { store }
}

describe('Vuex: products', () => {
    test('should start with initial state', () => {
        const { store } = createVuexStore(productState)
        const { products } = store.state
        expect(products).toEqual(productState.products)
    })

    test('mutations: setProducts', () => {
        const { store } = createVuexStore({ products: [] })
        store.commit('setProducts', productState.products)
        const { products } = store.state
        expect(products.length).toBe(productState.products.length)
        expect(products).toEqual(productState.products)
    })

    test('getters: getProducts ', () => {
        const { store } = createVuexStore(productState)
        expect(store.getters['getProducts'].length).toBe(productState.products.length)
    })

    test('getters: getProductByName ', () => {
        const { store } = createVuexStore(productState)
        expect(store.getters['getProductByName']('producto-2')).toEqual([productState.products[1]])
    })

    test('actions: getProducts ', async () => {
        const { store } = createVuexStore({ products: [] })
        await store.dispatch('getProducts')
        const { products } = store.state
        expect(products).toBeDefined()
    })
})
