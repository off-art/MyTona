import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { logOut } from "../../store/actions/auth";
class Logout extends Component {


  componentDidMount() {
    this.props.logOut();
  }

  render() {
    return <Redirect to={"/login"} />;
  }
}

function mapDispatchToProps(dispatch) {
  return {
    logOut: () => dispatch(logOut()),
  };
}

export default connect(null, mapDispatchToProps)(Logout);
