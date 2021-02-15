import React from "react";
import { connect } from "react-redux";
import Navbar from "./Navbar";

class NavbarContainer extends React.Component {
  render() {
    return (
      <Navbar
        getInputs={this.props.getInputs}
        inputEndData={this.props.inputEndData}
        inputStartData={this.props.inputStartData}
      />
    );
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
