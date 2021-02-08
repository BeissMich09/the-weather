const GET_HISTORYCAL_WEATHER = "GET_HISTORYCAL_WEATHER";
let initialState = {
  historycalWeather: [],
};

const historycalWeatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_HISTORYCAL_WEATHER:
      return {
        ...state,
        historycalWeather: action.weather,
      };
    default:
      return {
        ...state,
      };
  }
};

export const getHistorycalWeather = (weather) => {
  return {
    type: GET_HISTORYCAL_WEATHER,
    weather,
  };
};
export default historycalWeatherReducer;
