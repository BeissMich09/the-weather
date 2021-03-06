import React from "react";
import { connect } from "react-redux";
import { getQuality } from "../../redux/quality-reducer";
import AirQuality from "./AirQuality";
import style from "./../HistorycalWeather/HistorycalWeather.module.css";

class AirQualityContainer extends React.Component {
  render() {
    if (this.props.quality !== undefined && this.props.quality.length !== 0) {
      return (
        <div>
          <AirQuality quality={this.props.quality} />
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
  console.log("state", state);
  return {
    quality: state.qualityReducer.quality,
    error: state.searchReducer.error,
  };
};

export default connect(mapStateToProps, { getQuality })(AirQualityContainer);
