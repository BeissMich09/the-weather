import { combineReducers, createStore } from "redux";
import historycalWeatherReducer from "./historycal-weather-reducer";
import qualityReducer from "./quality-reducer";
import searchReducer from "./search-reducer";
import weatherReducer from "./weather-reducer";

const reducers = combineReducers({
  weatherReducer,
  qualityReducer,
  searchReducer,
  historycalWeatherReducer,
});

let store = createStore(reducers);

export default store;
