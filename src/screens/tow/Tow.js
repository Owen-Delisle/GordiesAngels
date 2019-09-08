import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import styles from "./styles";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
moneyImage = require("../../assets/moneyicon.png");
import { gql } from "apollo-boost";
import { graphql, compose } from "react-apollo";
import KeyboardShift from "../../components/KeyboardShift";

const getCurrentLocation = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      position => resolve(position),
      e => reject(e)
    );
  });
};

class Tow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {},
      bid: "0"
    };
  }

  componentDidMount() {
    return getCurrentLocation().then(position => {
      if (position) {
        this.setState({
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1
          }
        });
      }
    });
  }

  render() {
    return (
      <KeyboardShift gap={4}>
        {() => (
          <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
            accessible={false}
          >
            <View style={styles.background}>
              <View style={styles.container}>
                <Text style={styles.header}>Need a tug?</Text>
                <Text style={styles.header_secondary}>Place a bid</Text>
                <Image
                  style={(style = { height: 100, width: 100 })}
                  source={moneyImage}
                />
                <TextInput
                  style={styles.input}
                  placeholder="$$$"
                  keyboardType="number-pad"
                  placeholderTextColor="white"
                  onChangeText={bid =>
                    bid !== ""
                      ? this.setState({ bid })
                      : this.setState({ bid: "0" })
                  }
                />
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    this.props.pullRequest({
                      variables: {
                        longitude: this.state.region.longitude,
                        latitude: this.state.region.latitude,
                        userId: this.props.userId,
                        bid: parseFloat(this.state.bid)
                      }
                    });
                    this.props.navigation.navigate("Main");
                  }}
                >
                  <Text style={styles.buttonText}>Bid</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        )}
      </KeyboardShift>
    );
  }
}

const pullRequestMutation = gql`
  mutation(
    $longitude: Float!
    $latitude: Float!
    $userId: String!
    $bid: Float!
  ) {
    createPullRequest(
      longitude: $longitude
      latitude: $latitude
      userId: $userId
      bid: $bid
    ) {
      longitude
      latitude
      userId
      bid
    }
  }
`;

export default compose(graphql(pullRequestMutation, { name: "pullRequest" }))(
  Tow
);
