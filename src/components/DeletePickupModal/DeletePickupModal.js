import React, { Component } from "react";
import { View, TouchableOpacity, Text, Modal, Button } from "react-native";
import styles from "./styles";

export default class DeletePickupModal extends Component {
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
        visible={this.props.showDeletePickupModal}
      >
        <View style={styles.root}>
          <View style={styles.container}>
            <Text style={styles.title}>
              Are you sure you want to cancel your Pickup?
            </Text>
            <View style={styles.iconContainer}>
              <TouchableOpacity
                onPress={() => {
                  this.props.toggelDeletePickup(),
                    this.props.deletePullRequest({
                      variables: {
                        id: this.props.deleteLocationID
                      }
                    });
                }}
              >
                <Text style={styles.buttonText}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.props.toggelDeletePickup();
                }}
              >
                <Text style={styles.buttonText}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}
