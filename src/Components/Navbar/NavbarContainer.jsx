import React from "react";
import { connect } from "react-redux";
import Navbar from "./Navbar";
import style from "./Navbar.module.css";

class NavbarContainer extends React.Component {
  render() {
    const elementCity = this.props.cityArr.map((item) => (
      <Navbar
        item={item}
        getInputs={this.props.getInputs}
        inputEndData={this.props.inputEndData}
        inputStartData={this.props.inputStartData}
      />
    ));
    return <div className={style.container}>{elementCity}</div>;
  }
}
let mapStateToProps = (state) => {
  return {
    inputEndData: state.searchReducer.inputEndData,
    inputStartData: state.searchReducer.inputStartData,
    cityArr: state.navReducer.cityArr,
  };
};
export default connect(mapStateToProps)(NavbarContainer);
