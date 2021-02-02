import React from "react";
import { connect } from "react-redux";
import { getQuality } from "../../redux/quality-reducer";
import {
  getCity,
  getCountry,
  getInputCity,
  getInputCountry,
} from "../../redux/search-reducer";
import { getWeather } from "../../redux/weather-reducer";
import SearchInput from "./SearchInput";

class SearchInputContainer extends React.Component {
  getInputs = (city, country) => {
    let API_KEY = "963d857d4ba143be9d03b75c19f22728";
    this.props.getCity(city);
    this.props.getCountry(country);
    fetch(
      `https://api.weatherbit.io/v2.0/current?city=${city}&country=${country}&key=${API_KEY}&include=minutely&lang=ru`
    )
      .then((res) => res.json())
      .then((data) => this.props.getWeather(data));
    fetch(
      `https://api.weatherbit.io/v2.0/current/airquality?&city=${city}&country=${country}&key=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => this.props.getQuality(data));
  };
  render() {
    return (
      <div>
        <SearchInput
          inputCity={this.props.inputCity}
          inputCountry={this.props.inputCountry}
          getInputCity={this.props.getInputCity}
          getInputCountry={this.props.getInputCountry}
          nameCity={this.props.nameCity}
          nameCountry={this.props.nameCountry}
          getInputs={this.getInputs}
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
    nameCity: state.searchReducer.nameCity,
    nameCountry: state.searchReducer.nameCountry,
  };
};

export default connect(mapStateToProps, {
  getInputCity,
  getInputCountry,
  getCity,
  getCountry,
  getWeather,
  getQuality,
})(SearchInputContainer);
