import { createStore } from 'redux'

const initialState = {
    storeItems: [],
    storeConfig: [],
    page: 1,
    viewingAmount: 20,
    cart: []
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
    'ADD_TO_CART': (state, item) => {
        state = { ...state, cart: state.cart.push(item) }
    },
    'REMOVE_FROM_CART': (state, itemTitle) => {
        const itemIndex = state.cart.findIndex(({ title }) => itemTitle === title)

        if (itemIndex > -1) {
            state = { ...state, cart: state.cart.splice(itemIndex, 1) }
        }
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

window.store = store

export default store