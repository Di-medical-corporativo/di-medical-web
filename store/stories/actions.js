
import { database } from '../../firebase/firebase'
import { child, get, ref } from 'firebase/database';

export const getStories = async({ commit }) => {
    commit('setLoading', true)
    try {
        const r = ref(database)
        const res =( await get(child(r, 'stories'))).val()
        const stories = [];
        for (let id of Object.keys(res)) {
            stories.push({
            id,
            ...res[id],
          });
        }
        commit('setStories', stories )
      } catch (e) {
        commit('setStories', [] )
    }
    commit('setLoading', false)
}
