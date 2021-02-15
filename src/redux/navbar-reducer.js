let initialState = {
  cityArr: [
    { city: "Moscow", contry: "Russia" },
    { city: "StPetersburg", contry: "Russia" },
    { city: "Sochi", contry: "Russia" },
    { city: "Kaliningrad", contry: "Russia" },
    { city: "Berlin", contry: "Germany" },
    { city: "New York", contry: "USA" },
    { city: "London", contry: "US" },
  ],
};

const navReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default navReducer;
