import { combineReducers, createStore } from "redux";
import qualityReducer from "./quality-reducer";
import weatherReducer from "./weather-reducer";

const reducers = combineReducers({ weatherReducer, qualityReducer });

let store = createStore(reducers);

export default store;
