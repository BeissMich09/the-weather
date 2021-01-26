const GET_QUALITY = "GET_QUALITY";

let initialState = {
  quality: [],
};

const qualityReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_QUALITY:
      return { ...state, quality: action.data };
    default:
      return state;
  }
};

export const getQuality = (data) => {
  return {
    data,
    type: GET_QUALITY,
  };
};
export default qualityReducer;
