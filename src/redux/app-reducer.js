const GET_KEY = "GET_KEY";

const initialState = {
  key: "",
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_KEY:
      return {
        ...state,
        key: action.key,
      };

    default:
      return {
        ...state,
      };
  }
};
export const getKey = (key) => {
  return {
    type: GET_KEY,
    key,
  };
};
export default appReducer;
