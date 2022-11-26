
import { database } from '../../firebase/firebase'
import { get, limitToLast, orderByKey, query, ref } from 'firebase/database';
import { orderStoriesByDate } from '~/helpers/orderByDate';

export const getStories = async ({ commit }) => {
    commit('setLoading', true)
    try {
        const databaseRef = ref(database, 'stories')
        const queryResponse = query(databaseRef, orderByKey('date'))
        const storiesResponse = (await get(queryResponse)).val()
        const stories = [];
        for (let id of Object.keys(storiesResponse)) {
            stories.push({
                id,
                ...storiesResponse[id],
            });
        }
        const sortedStories = orderStoriesByDate(stories)
        console.log(sortedStories)
        commit('setStories', sortedStories)
    } catch (e) {
        commit('setStories', [])
    }
    commit('setLoading', false)
}
