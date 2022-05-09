import { database } from '../../firebase/firebase'
import { child, get, ref } from 'firebase/database';

export const getProducts = async ({ commit }) => {
    try {
        const r = ref(database)
        const res =( await get(child(r, 'products')) ).val()
        const products = [];
        for (let id of Object.keys(res)) {
            products.push({
            id,
            ...res[id],
          });
        }
        commit('setProducts', products )
      } catch (e) {
        commit('setProducts', [] )
    }
}

export const getProductByName = async (_, name) => {
  try {
      const r = ref(database)
      const res =(await get(child(r, 'products'))).val()
      const products = [];
      for (let id of Object.keys(res)) {
          products.push({
          id,
          ...res[id],
        })
      }
      const product = products.filter(p => p.title.toLowerCase() == name)
      return product
    } catch (e) {
      return {
        ok: false
      }
    }
}

export const getProductsRecommended = async (_, id) => {
  try {
      const r = ref(database)
      const res =( await get(child(r, 'products')) ).val()
      const products = [];
      for (let id of Object.keys(res)) {
          products.push({
          id,
          ...res[id],
        });
      }
      return products.filter(p => p.id != id)
    } catch (e) {
      return {
        ok: false
      }
  }
}