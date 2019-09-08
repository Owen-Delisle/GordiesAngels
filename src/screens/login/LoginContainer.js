import React, { Component } from "react";
import Login from "./Login";
import UserContext from "../../context/UserContext/UserProvider";

class LoginContainer extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    state = {};
  }
  render() {
    return (
      <UserContext.Consumer>
        {({ storeSessionToken, token }) => {
          if (token) {
            this.props.navigation.navigate("App");
          }
          return (
            <Login
              navigation={this.props.navigation}
              storeSessionToken={storeSessionToken}
              token={token}
            />
          );
        }}
      </UserContext.Consumer>
    );
  }
}

export default LoginContainer;
