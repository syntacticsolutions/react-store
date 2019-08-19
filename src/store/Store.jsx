import { createStore } from "redux";
import RootReducer from "./RootReducer";

const Store = createStore(RootReducer);

store.subscribe(() => {
    console.log('Store updated: ', store.getState())
})

export default Store;
