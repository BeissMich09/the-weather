import React from "react";
import { connect } from "react-redux";
import { getQuality } from "../../redux/quality-reducer";
import AirQuality from "./AirQuality";

class AirQualityContainer extends React.Component {
  componentDidMount() {
    let API_KEY = "963d857d4ba143be9d03b75c19f22728";
    fetch(
      `https://api.weatherbit.io/v2.0/current/airquality?&city=Raleigh&country=US&key=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => this.props.getQuality(data));
  }
  render() {
    if (this.props.quality !== undefined && this.props.quality.length !== 0) {
      return (
        <div>
          <AirQuality quality={this.props.quality} />
        </div>
      );
    } else {
      return <div>Нет данных</div>;
    }
  }
}
let mapStateToProps = (state) => {
  console.log("state", state);
  return {
    quality: state.qualityReducer.quality,
  };
};

export default connect(mapStateToProps, { getQuality })(AirQualityContainer);
