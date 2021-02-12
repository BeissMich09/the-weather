import React from "react";
import { connect } from "react-redux";
import HistorycalWeather from "./HistorycalWeather";
import style from "./HistorycalWeather.module.css"

class HistorycalWeatherContainer extends React.Component {
  render() {
    if (
      typeof this.props.historycalWeather !== "string" &&
      this.props.historycalWeather !== undefined &&
      this.props.historycalWeather.length !== 0
    ) {
      return (
        <HistorycalWeather historycalWeather={this.props.historycalWeather} />
      );
    } else if (typeof this.props.historycalWeather === "string") {
      console.log(this.props.historycalWeather);
      return <div className={style.extension}>{this.props.historycalWeather}</div>;
    } else {
      return <div className={style.extension}>Нет данных</div>;
    }
  }
}
const mapStateToProps = (state) => {
  return {
    historycalWeather: state.historycalWeatherReducer.historycalWeather,
  };
};
export default connect(mapStateToProps, null)(HistorycalWeatherContainer);
