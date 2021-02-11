import React from "react";
import { connect } from "react-redux";
import HistorycalWeather from "./HistorycalWeather";

class HistorycalWeatherContainer extends React.Component {
  render() {
    if (
      this.props.historycalWeather !== undefined &&
      this.props.historycalWeather.length !== 0
    ) {
      return (
        <HistorycalWeather historycalWeather={this.props.historycalWeather} />
      );
    } else {
      return <div>Нет данных</div>;
    }
  }
}
const mapStateToProps = (state) => {
  return {
    historycalWeather: state.historycalWeatherReducer.historycalWeather,
  };
};
export default connect(mapStateToProps, null)(HistorycalWeatherContainer);
