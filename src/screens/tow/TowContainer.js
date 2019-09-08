import React, { Component } from "react";
import Tow from "./Tow";
import UserContext from "../../context/UserContext/UserProvider";

export default class TowContainer extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <UserContext.Consumer>
        {({ id }) => {
          return <Tow userId={id} navigation={this.props.navigation} />;
        }}
      </UserContext.Consumer>
    );
  }
}
