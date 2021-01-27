import React from "react";
import { connect } from "react-redux";
import { getInputCity, getInputCountry } from "../../redux/search-reducer";
import { getCity, getCountry } from "../../redux/weather-reducer";
import SearchInput from "./SearchInput";

class SearchInputContainer extends React.Component {
  //   getInputs = (city, country) => {
  //     getCity(city);
  //     getCountry(country);
  //   };
  render() {
    return (
      <div>
        <SearchInput
          inputCity={this.props.inputCity}
          inputCountry={this.props.inputCountry}
          getInputCity={this.props.getInputCity}
          getInputCountry={this.props.getInputCountry}
          getInputs={this.getInputs}
          getCity={this.props.getCity}
          getCountry={this.props.getCountry}
        />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  console.log(state);
  return {
    inputCity: state.searchReducer.inputCity,
    inputCountry: state.searchReducer.inputCountry,
  };
};

export default connect(mapStateToProps, {
  getInputCity,
  getInputCountry,
  getCity,
  getCountry,
})(SearchInputContainer);
