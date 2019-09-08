import React, { Component } from "react";
import { View, ActivityIndicator, Text, AppState } from "react-native";
import Main from "./Main";
import { Query } from "react-apollo";
import { QueryPullRequests } from "../../api";
import UserContext from "../../context/UserContext/UserProvider";
import PushController from "../../components/PushController";
import PushNotification from "react-native-push-notification";

export default class MainContainer extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      appState: AppState.currentState,
      deletedPrID: "",
      renderPoly: false,
      userFocusedPR: "",
      showCancelledPickupModal: false,
      viewData: {}
    };
    this._handleAppStateChange = this._handleAppStateChange.bind(this);
    this._handleNotificationRequest = this._handleNotificationRequest.bind(
      this
    );
    this.setRenderPoly = this.setRenderPoly.bind(this);
    this.toggelCancelledPickup = this.toggelCancelledPickup.bind(this);
  }

  componentDidMount() {
    AppState.addEventListener("change", this._handleAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener("change", this._handleAppStateChange);
  }

  _handleAppStateChange = nextAppState => {
    this.setState({ appState: nextAppState });
  };

  _handleNotificationRequest = () => {
    console.log("handle notifaction called");
    PushNotification.localNotification({
      message: "Someone needs a tug!" // (required)
    });
  };

  setRenderPoly(renderPoly, userFocusedPR) {
    this.setState({ renderPoly: renderPoly, userFocusedPR: userFocusedPR });
  }

  toggelCancelledPickup() {
    this.setState({
      showCancelledPickupModal: !this.state.showCancelledPickupModal
    });
  }

  subscribeToNewPullRequests(subscribeToMore) {
    subscribeToMore({
      document: pullRequestPostSubscription,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
        this._handleNotificationRequest();
        const newFeedItem = subscriptionData.data.pullRequestAdded;

        return Object.assign({}, prev, {
          pullRequests: [newFeedItem, ...prev.pullRequests]
        });
      }
    });
  }

  subscribeToDeletedPullRequests(subscribeToMore) {
    subscribeToMore({
      document: pullRequestDeleteSubscription,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
        const newFeedItem = subscriptionData.data.pullRequestDeleted;

        if (newFeedItem.id == this.state.userFocusedPR) {
          this.setRenderPoly(false, "");
          this.toggelCancelledPickup();
        }

        return Object.assign({}, prev, {
          pullRequests: prev.pullRequests.filter(
            pullRequest => pullRequest.id != newFeedItem.id
          )
        });
      }
    });
  }

  render() {
    return (
      <React.Fragment>
        <UserContext.Consumer>
          {({ id }) => {
            return (
              <Query query={QueryPullRequests}>
                {({ loading, error, data, subscribeToMore }) => {
                  if (loading) {
                    return (
                      <View
                        style={{
                          flex: 1,
                          justifyContent: "center",
                          backgroundColor: "#1D2C4D"
                        }}
                      >
                        <ActivityIndicator size="large" color="white" />
                      </View>
                    );
                  }
                  if (error) {
                    console.log("error", error);
                    return <Text>{error}</Text>;
                  }
                  if (data) {
                    return (
                      <Main
                        data={data}
                        userId={id}
                        deletedPrId={this.state.deletedPrId}
                        renderPoly={this.state.renderPoly}
                        setRenderPoly={this.setRenderPoly}
                        showCancelledPickupModal={
                          this.state.showCancelledPickupModal
                        }
                        toggelCancelledPickup={this.toggelCancelledPickup}
                        subscribeToNewPullRequests={this.subscribeToNewPullRequests.bind(
                          this
                        )}
                        subscribeToDeletedPullRequests={this.subscribeToDeletedPullRequests.bind(
                          this
                        )}
                        subscribeToMore={subscribeToMore}
                      />
                    );
                  }
                }}
              </Query>
            );
          }}
        </UserContext.Consumer>
        <PushController />
      </React.Fragment>
    );
  }
}

const pullRequestPostSubscription = gql`
  subscription {
    pullRequestAdded {
      id
      userId
      longitude
      latitude
      bid
    }
  }
`;

const pullRequestDeleteSubscription = gql`
  subscription {
    pullRequestDeleted {
      id
      userId
      longitude
      latitude
      bid
    }
  }
`;

import { gql } from "apollo-boost";
