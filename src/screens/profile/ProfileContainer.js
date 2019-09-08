import React, { Component } from "react";
import Profile from "./Profile";
import UserContext from "../../context/UserContext/UserProvider";

export default class ProfileContainer extends Component {
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
        {({ removeUserIdToken, id }) => {
          return (
            <Profile
              logout={removeUserIdToken}
              id={id}
              navigation={this.props.navigation}
            />
          );
        }}
      </UserContext.Consumer>
    );
  }
}
