import { createStore } from 'redux'
import storeConfig from '../assets/mock-endpoints/storeConfig.json'
import storeItems from '../assets/mock-endpoints/storeItems.json'

const initialState = {
    storeItems,
    storeConfig,
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
        // TODO add to localStore
    },
    'REMOVE_FROM_CART': (state, itemTitle) => {
        const itemIndex = state.cart.findIndex(({ title }) => itemTitle === title)

        if (itemIndex > -1) {
            state = { ...state, cart: state.cart.splice(itemIndex, 1) }
        }
        // TODO add to localStorage
    },
    'SET_STORE_CONFIG': (state, storeConfig) => {
        state = { ...state, storeConfig }
    }
}

export default storeReducer = (state = initialState, { type, payload }) => {
    if (mutations[type]) {
        return mutations[type](state, payload)
    }
    return { ...state }
}
