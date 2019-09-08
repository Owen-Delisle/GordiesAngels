import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "./styles";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Profile</Text>

        <View style={styles.heading_container}>
          <Text style={styles.header_secondary}>12</Text>
          <Text style={styles.Text}>Pickups</Text>
        </View>

        <View style={styles.heading_container}>
          <Text style={styles.header_secondary}>$35.00</Text>
          <Text style={styles.Text}>Total Earned!</Text>
        </View>

        <TouchableOpacity
          onPress={() => {
            this.props.logout(this.props.id);
            this.props.navigation.navigate("Auth");
          }}
        >
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
