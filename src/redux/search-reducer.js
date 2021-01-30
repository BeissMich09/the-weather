const GET_INPUT_CITY = "GET_INPUTS";
const GET_INPUT_COUNTRY = "GET_INPUT_COUNTRY";
const GET_CITY = "GET_CITY";
const GET_COUNTRY = "GET_COUNTRY";

let initialState = {
  inputCity: "",
  inputCountry: "",
  nameCity: "",
  nameCountry: "",
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INPUT_CITY:
      return {
        ...state,
        inputCity: action.cityValue,
      };
    case GET_INPUT_COUNTRY:
      return {
        ...state,
        inputCountry: action.countryValue,
      };
    case GET_CITY:
      return {
        ...state,
        nameCity: action.city,
      };
    case GET_COUNTRY:
      return {
        ...state,
        nameCountry: action.country,
      };
    default:
      return state;
  }
};

export const getInputCity = (cityValue) => {
  return {
    cityValue,
    type: GET_INPUT_CITY,
  };
};

export const getInputCountry = (countryValue) => {
  return {
    countryValue,
    type: GET_INPUT_COUNTRY,
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

export default searchReducer;
