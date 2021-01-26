const GET_WEATHER = "GET_WEATHER";

let initialState = {
  weather: [],
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WEATHER:
      return {
        ...state,
        weather: action.weather,
      };
    default:
      return state;
  }
};

export const getWeather = (weather) => {
  return {
    weather,
    type: GET_WEATHER,
  };
};

export default weatherReducer;
