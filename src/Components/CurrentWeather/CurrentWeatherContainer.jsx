import React from "react";
import { connect } from "react-redux";
import { getWeather } from "../../redux/weather-reducer";
import CurrentWeather from "./CurrentWeather";
import style from "./../HistorycalWeather/HistorycalWeather.module.css";

class CurrentWeatherContainer extends React.Component {
  render() {
    if (this.props.weather !== undefined && this.props.weather.length !== 0) {
      return (
        <div>
          <CurrentWeather weather={this.props.weather} />
        </div>
      );
    } else if (this.props.error.length !== 0) {
      return <div className={style.extension}>В базе нет такого города!</div>;
    } else {
      return <div className={style.extension}>Нет данных</div>;
    }
  }
}
let mapStateToProps = (state) => {
  return {
    weather: state.weatherReducer.weather,
    city: state.searchReducer.nameCity,
    country: state.searchReducer.nameCountry,
    error: state.searchReducer.error,
  };
};

export default connect(mapStateToProps, { getWeather })(
  CurrentWeatherContainer
);
