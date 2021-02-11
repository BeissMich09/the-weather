import React from "react";
import { connect } from "react-redux";
import { getHistorycalWeather } from "../../redux/historycal-weather-reducer";
import { getQuality } from "../../redux/quality-reducer";
import {
  getCity,
  getCountry,
  getStartData,
  getEndData,
  getError,
  getInputCity,
  getInputCountry,
} from "../../redux/search-reducer";
import { getWeather } from "../../redux/weather-reducer";
import SearchInput from "./SearchInput";

class SearchInputContainer extends React.Component {
  getInputs = (city, country, dataStart, dataEnd) => {
    console.log("this.props.key", this.props);
    this.props.getCity(city);
    this.props.getCountry(country);
    if (city !== "" && country !== "") {
      fetch(
        `https://api.weatherbit.io/v2.0/current?city=${city}&country=${country}&key=${this.props.keyAPI.API_KEY}&include=minutely&lang=ru`
      )
        .then((res) => res.json())
        .then((data) => this.props.getWeather(data))
        .catch((error) => this.props.getError(error));
      fetch(
        `https://api.weatherbit.io/v2.0/current/airquality?&city=${city}&country=${country}&key=${this.props.keyAPI.API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => this.props.getQuality(data))
        .catch((error) => this.props.getError(error));
      fetch(
        `https://api.weatherbit.io/v2.0/history/daily?&city=${city}&start_date=${dataStart}&end_date=${dataEnd}&key=${this.props.keyAPI.API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => this.props.getHistorycalWeather(data));
    } else {
      return alert("Зполните оба поля!");
    }
  };
  render() {
    return (
      <SearchInput
        inputCity={this.props.inputCity}
        inputCountry={this.props.inputCountry}
        getInputCity={this.props.getInputCity}
        getInputCountry={this.props.getInputCountry}
        nameCity={this.props.nameCity}
        nameCountry={this.props.nameCountry}
        getInputs={this.getInputs}
        getEndData={this.props.getEndData}
        getStartData={this.props.getStartData}
        inputStartData={this.props.inputStartData}
        inputEndData={this.props.inputEndData}
        historycalWeather={this.props.historycalWeather}
      />
    );
  }
}

let mapStateToProps = (state) => {
  console.log("state", state);
  return {
    inputCity: state.searchReducer.inputCity,
    inputCountry: state.searchReducer.inputCountry,
    nameCity: state.searchReducer.nameCity,
    nameCountry: state.searchReducer.nameCountry,
    inputEndData: state.searchReducer.inputEndData,
    inputStartData: state.searchReducer.inputStartData,
    historycalWeather: state.historycalWeatherReducer.historycalWeather,
    // key: state.appReducer.key,
  };
};

export default connect(mapStateToProps, {
  getInputCity,
  getInputCountry,
  getCity,
  getCountry,
  getWeather,
  getQuality,
  getError,
  getEndData,
  getStartData,
  getHistorycalWeather,
})(SearchInputContainer);
