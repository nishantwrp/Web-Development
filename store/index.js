import { combineReducers, createStore } from "redux";
import navigationReducer from "./navigation";

const rootReducer = combineReducers({
    navigation: navigationReducer,
})

const store = createStore(rootReducer);

export default store;
