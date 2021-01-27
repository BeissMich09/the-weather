import { Route } from "react-router-dom";
import "./App.css";
import AirQualityContainer from "./Components/AirQuality/AirQualityContainer";
import CurrentWeatherContainer from "./Components/CurrentWeather/CurrentWeatherContainer";
import Navigation from "./Components/Navigation/Navigation";
import SearchInputContainer from "./Components/SearchInput/SearchInputContainer";

function App() {
  return (
    <div className="App">
      <div>
        <Navigation />
        <SearchInputContainer />
      </div>
      <div>
        <Route path="/weather" render={() => <CurrentWeatherContainer />} />
        <Route path="/airquality" render={() => <AirQualityContainer />} />
      </div>
    </div>
  );
}

export default App;
