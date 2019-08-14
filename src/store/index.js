import { createStore } from 'redux'

const initialState = {
    storeItems: [],
    storeConfig: [],
    page: 1,
    viewingAmount: 20
}

const mutations = {
    'SET_PAGE': (state, page) => {
        state = { ...state, page }
    },
    'SET_VIEWING_AMOUNT': (state, viewingAmount) => {
        state = { ...state, viewingAmount }
    },
    'SET_STORE_ITEMS': (state, storeItems) => {
        state = { ...state, storeItems }
    },
    'SET_STORE_CONFIG': (state, storeConfig) => {
        state = { ...state, storeConfig }
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

export default store