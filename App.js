//Created by Owen Delisle March 15, 2019

import React, { Component } from "react";
import AppNavigator from "./src/navigation/RootStackNavigator";
import client from "./src/config/api";
import { ApolloProvider } from "react-apollo";
import { UserProvider } from "./src/context/UserContext";
import PushNotification from "react-native-push-notification";

export default class App extends Component {
  constructor(props) {
    super(props);
    PushNotification.configure({
      onNotification: function(notification) {
        notification.finish(PushNotificationIOS.FetchResult.NoData);
      },

      permissions: {
        alert: true,
        badge: true,
        sound: true
      },

      popInitialNotification: true,
      requestPermissions: true
    });
  }
  render() {
    return (
      <ApolloProvider client={client}>
        <UserProvider>
          <AppNavigator />
        </UserProvider>
      </ApolloProvider>
    );
  }
}
