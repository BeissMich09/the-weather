let initialState = {
  cityArr: [
    { city: "Moscow", country: "Russia" },
    { city: "StPetersburg", country: "Russia" },
    { city: "Sochi", country: "Russia" },
    { city: "Kaliningrad", country: "Russia" },
    { city: "Berlin", country: "Germany" },
    { city: "New York", country: "USA" },
    { city: "London", country: "US" },
    { city: "Antalya", country: "Turkey" },
    { city: "Cairo", country: "Egypt" },
  ],
};

const navReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default navReducer;
