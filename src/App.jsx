import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import "./App.css";
import AirQualityContainer from "./Components/AirQuality/AirQualityContainer";
import CurrentWeatherContainer from "./Components/CurrentWeather/CurrentWeatherContainer";
import Footer from "./Components/Footer/Footer";
import HistorycalWeatherContainer from "./Components/HistorycalWeather/HistorycalWeatherContainer";
import Navbar from "./Components/Navbar/Navbar";
import Navigation from "./Components/Navigation/Navigation";
import SearchInputContainer from "./Components/SearchInput/SearchInputContainer";
import { getKey } from "./redux/app-reducer";

class App extends React.Component {
  componentDidMount() {
    fetch(`/config/weather.json`)
      .then((res) => res.json())
      .then((data) => this.props.getKey(data));
  }
  render() {
    if (this.props.keyAPI !== undefined) {
      return (
        <div className="App">
          <div className="navigation">
            <Navigation />
          </div>
          <div className="navbar">
            <Navbar />
          </div>
          <div className="content">
            <SearchInputContainer keyAPI={this.props.keyAPI} />
            <Route path="/weather" render={() => <CurrentWeatherContainer />} />
            <Route path="/airquality" render={() => <AirQualityContainer />} />
            <Route
              path="/historycalweather"
              render={() => <HistorycalWeatherContainer />}
            />
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

export default connect(mapStateToProps, { getKey })(App);
