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