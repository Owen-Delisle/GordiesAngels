import React, { Component } from "react";
import { View, TouchableOpacity, Text, Modal, Button } from "react-native";
import styles from "./styles";

export default class CancelledPickupModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  render() {
    return (
      <Modal
        animationType="slide"
        trasnparent={false}
        visible={this.props.showCancelledPickupModal}
      >
        <View style={styles.container}>
          <Text style={styles.title}>Your Pickup Got Cancelled</Text>
          <TouchableOpacity
            onPress={() => {
              this.props.toggelCancelledPickup();
            }}
          >
            <Text style={styles.buttonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  }
}
