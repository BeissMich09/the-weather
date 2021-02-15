import { combineReducers, createStore } from "redux";
import appReducer from "./app-reducer";
import historycalWeatherReducer from "./historycal-weather-reducer";
import navReducer from "./navbar-reducer";
import qualityReducer from "./quality-reducer";
import searchReducer from "./search-reducer";
import weatherReducer from "./weather-reducer";

const reducers = combineReducers({
  weatherReducer,
  qualityReducer,
  searchReducer,
  historycalWeatherReducer,
  appReducer,
  navReducer,
});

let store = createStore(reducers);

export default store;
