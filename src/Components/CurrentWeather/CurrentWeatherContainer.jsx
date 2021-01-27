import React from "react";
import { connect } from "react-redux";
import { getWeather } from "../../redux/weather-reducer";
import CurrentWeather from "./CurrentWeather";

class CurrentWeatherContainer extends React.Component {
  componentDidMount() {
    let API_KEY = "963d857d4ba143be9d03b75c19f22728";
    let city = this.props.city;
    let country = this.props.country;
    fetch(
      `https://api.weatherbit.io/v2.0/current?city=${city}&country=${country}&key=${API_KEY}&include=minutely&lang=ru`
    )
      .then((res) => res.json())
      .then((data) => this.props.getWeather(data));
  }
  render() {
    if (this.props.weather !== undefined && this.props.weather.length !== 0) {
      return (
        <div>
          <CurrentWeather weather={this.props.weather} />
        </div>
      );
    } else {
      return <div>Нет данных</div>;
    }
  }
}
let mapStateToProps = (state) => {
  return {
    weather: state.weatherReducer.weather,
    city: state.weatherReducer.city,
    country: state.weatherReducer.country,
  };
};

export default connect(mapStateToProps, { getWeather })(
  CurrentWeatherContainer
);
