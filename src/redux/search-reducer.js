const GET_INPUT_CITY = "GET_INPUTS";
const GET_INPUT_COUNTRY = "GET_INPUT_COUNTRY";
const GET_CITY = "GET_CITY";
const GET_COUNTRY = "GET_COUNTRY";
const GET_ERROR = "GET_ERROR";
const GET_INPUT_END_DATA = "GET_INPUT_END_DATA";
const GET_INPUT_START_DATA = "GET_INPUT_START_DATA";

let initialState = {
  inputCity: "",
  inputCountry: "",
  inputStartData: "",
  inputEndData: "",
  nameCity: "",
  nameCountry: "",
  error: "",
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
    case GET_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case GET_INPUT_START_DATA:
      return {
        ...state,
        inputStartData: action.data,
      };
    case GET_INPUT_END_DATA:
      return {
        ...state,
        inputEndData: action.data,
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

export const getError = (error) => {
  return {
    type: GET_ERROR,
    error,
  };
};
export const getEndData = (data) => {
  return {
    type: GET_INPUT_END_DATA,
    data,
  };
};
export const getStartData = (data) => {
  return {
    type: GET_INPUT_START_DATA,
    data,
  };
};
export default searchReducer;
