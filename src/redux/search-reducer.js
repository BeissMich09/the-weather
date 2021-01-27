const GET_INPUT_CITY = "GET_INPUTS";
const GET_INPUT_COUNTRY = "GET_INPUT_COUNTRY";

let initialState = {
  inputCity: "",
  inputCountry: "",
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

export default searchReducer;
