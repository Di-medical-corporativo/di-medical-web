import Vuex from "vuex";
import { createLocalVue } from '@vue/test-utils';

import storiesStore from '@/store/stories'
import { storiesState } from '~/test/mock-data/test-stories-state'

const createVuexStore = (initialState) => {
    const localvue = createLocalVue()
    localvue.use(Vuex)

    const store = new Vuex.Store({ ...storiesStore, state: initialState })
    return { store }
}

describe('Vuex: stories', () => {
    test('should start with initial state', () => {
        const { store } = createVuexStore(storiesState)
        const { stories } = store.state
        expect(stories).toEqual(storiesState.stories)
    })

    test('mutations: setStories', () => {
        const { store } = createVuexStore({ stories: [] })
        store.commit('setStories', storiesState.stories)
        const { stories } = store.state
        expect(stories.length).toBe(storiesState.stories.length)
        expect(stories).toEqual(storiesState.stories)
    })
    
    test('getters: getStories', () => {
        const { store } = createVuexStore(storiesState)
        expect(store.getters['getStories'].length).toBe(storiesState.stories.length)
        expect(store.getters['getStories']).toEqual(storiesState.stories)
    })

    test('actions: getStories', async () => {
        const { store } = createVuexStore({ stories: [] })
        await store.dispatch('getStories')
        const { stories, isLoading } = store.state
        console.log(stories)
        expect(stories).toBeDefined()
        expect(isLoading).toBeFalsy()
    })
})
