import React, { Component, Fragment } from "react";
import Signup from "./Signup";
import { Mutation } from "react-apollo";

class SignupContainer extends Component {
  //   static navigationOptions = {
  //     header: null
  //   };
  constructor(props) {
    super(props);
    state = {};
  }
  render() {
    return (
      <Fragment>
        <Signup navigation={this.props.navigation} />
      </Fragment>
    );
  }
}

export default SignupContainer;
