import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import "./App.css";
import AirQualityContainer from "./Components/AirQuality/AirQualityContainer";
import CurrentWeatherContainer from "./Components/CurrentWeather/CurrentWeatherContainer";
import Footer from "./Components/Footer/Footer";
import HistorycalWeatherContainer from "./Components/HistorycalWeather/HistorycalWeatherContainer";
import NavbarContainer from "./Components/Navbar/NavbarContainer";
import Navigation from "./Components/Navigation/Navigation";
import SearchInputContainer from "./Components/SearchInput/SearchInputContainer";
import { getKey } from "./redux/app-reducer";
import { getHistorycalWeather } from "./redux/historycal-weather-reducer";
import { getQuality } from "./redux/quality-reducer";
import { getCity, getCountry, getError } from "./redux/search-reducer";
import { getWeather } from "./redux/weather-reducer";

class App extends React.Component {
  // componentDidMount() {
   
  //   fetch(`/config/weather.json`)
  //     .then((res) => res.json())
  //     .then((data) => this.props.getKey(data))
  //     .catch((error) => console.log(error));
  // }
  getInputs = (city, country, dataStart, dataEnd) => {
    let API_KEY = "963d857d4ba143be9d03b75c19f22728";
    console.log("this.props.key", this.props);
    this.props.getCity(city);
    this.props.getCountry(country);
    if (city !== "" && country !== "") {
      fetch(
        `https://api.weatherbit.io/v2.0/current?city=${city}&country=${country}&key=${API_KEY}&include=minutely&lang=ru`
      )
        .then((res) => res.json())
        .then((data) => this.props.getWeather(data))
        .catch((error) => this.props.getError(error));
      fetch(
        `https://api.weatherbit.io/v2.0/current/airquality?&city=${city}&country=${country}&key=${API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => this.props.getQuality(data))
        .catch((error) => this.props.getError(error));
      if (dataStart !== "" && dataEnd !== "") {
        fetch(
          `https://api.weatherbit.io/v2.0/history/daily?&city=${city}&start_date=${dataStart}&end_date=${dataEnd}&key=${API_KEY}`
        )
          .then((res) => res.json())
          .then((data) => this.props.getHistorycalWeather(data));
      } else {
        return this.props.getHistorycalWeather("Укажите необходимые даты");
      }
    } else {
      return alert("Заполните оба поля!");
    }
  };
  render() {
    if (this.props.keyAPI !== undefined) {
      return (
        <div className="App">
          <div className="navigation">
            <Navigation />
          </div>
          <div className="navbar">
            <NavbarContainer getInputs={this.getInputs} />
          </div>
          <div className="content">
            <SearchInputContainer
              keyAPI={this.props.keyAPI}
              getInputs={this.getInputs}
            />
            <Route
              exact
              path="/weather"
              render={() => <CurrentWeatherContainer />}
            />
            <Route path="/airquality" render={() => <AirQualityContainer />} />
            <Route
              path="/historycalweather"
              render={() => <HistorycalWeatherContainer />}
            />
            <Redirect from="/" to="/weather" />
          </div>
          <div className="footer">
            <Footer />
          </div>
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}
let mapStateToProps = (state) => {
  return {
    keyAPI: state.appReducer.key,
  };
};

export default connect(mapStateToProps, {
  getQuality,
  getWeather,
  getKey,
  getCity,
  getCountry,
  getHistorycalWeather,
  getError,
})(App);
