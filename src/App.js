import { Route } from "react-router-dom";
import "./App.css";
import AirQualityContainer from "./Components/AirQuality/AirQualityContainer";
import CurrentWeatherContainer from "./Components/CurrentWeather/CurrentWeatherContainer";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Navigation from "./Components/Navigation/Navigation";
import SearchInputContainer from "./Components/SearchInput/SearchInputContainer";

function App() {
  return (
    <div className="App">
      <div className="navigation">
        <Navigation />
      </div>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <SearchInputContainer />
        <Route path="/weather" render={() => <CurrentWeatherContainer />} />
        <Route path="/airquality" render={() => <AirQualityContainer />} />
        {/* <Route path="/history" render={() => <HistoryWeather />} /> */}
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
