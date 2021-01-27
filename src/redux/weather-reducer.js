const GET_WEATHER = "GET_WEATHER";
const GET_CITY = "GET_CITY";
const GET_COUNTRY = "GET_COUNTRY";

let initialState = {
  weather: [],
  city: "Raleigh",
  country: "US",
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WEATHER:
      return {
        ...state,
        weather: action.weather,
      };
    case GET_CITY:
      return {
        ...state,
        city: action.city,
      };
    case GET_COUNTRY:
      return {
        ...state,
        country: action.country,
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
export const getCity = (city) => {
  return {
    type: GET_CITY,
    city,
  };
};
export const getCountry = (country) => {
  return {
    type: GET_COUNTRY,
    country,
  };
};
export default weatherReducer;
