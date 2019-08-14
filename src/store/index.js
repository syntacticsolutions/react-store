import { createStore } from 'redux'

const initialState = {
    storeItems: [],
    storeConfig: [],
    page: 1,
    viewingAmount: 20
}

const mutations = {
    'SET_PAGE': (state, payload) => {
        state.page = payload
    },
    'SET_VIEWING_AMOUNT': (state, payload) => {
        state.viewingAmount = payload
    },
    'SET_STORE_ITEMS': (state, payload) => {
        state.storeItems = payload
    },
    'SET_STORE_CONFIG': (state, payload) => {
        state.storeConfig = payload
    }
}

const reducer = (state, { type, payload }) => {
    mutations[type](state, payload)

    return state
}

const store = createStore(reducer, initialState)

store.subscribe(() => {
    console.log('Store updated: ', store.getState())
})

store.dispatch({
    type: 'SET_PAGE',
    payload: 2
})

export default store