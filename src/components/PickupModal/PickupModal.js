import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Modal,
  Button,
  ActivityIndicator
} from "react-native";
import styles from "./styles";

export default class PickupModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  render() {
    if (!this.props.renderPoly) {
      return (
        <Modal
          animationType="slide"
          trasnparent={false}
          visible={this.props.showModal}
        >
          <View style={styles.root}>
            <View style={styles.container}>
              <Text style={styles.title}>Confirm Pickup</Text>
              <Text style={styles.heading}>
                {this.props.pickupInfo.endAddress}
              </Text>

              {this.props.pickupInfoLoading && (
                <ActivityIndicator size="large" color="white" />
              )}

              <View style={styles.iconContainer}>
                <Text style={styles.heading}>${this.props.pickupBid}</Text>
                <Text style={styles.heading}>
                  {this.props.pickupInfo.legDistance}
                </Text>
                <Text style={styles.heading}>
                  {this.props.pickupInfo.legDuration}
                </Text>
              </View>

              <View style={styles.iconContainer}>
                <TouchableOpacity
                  onPress={() => {
                    this.props.toggelPickup(),
                      this.props.setRenderPoly(true, this.props.userFocusedPR);
                    this.props.setRegion(
                      this.props.user_coordinate.longitude,
                      this.props.user_coordinate.latitude
                    );
                  }}
                >
                  <Text style={styles.buttonText}>Pickup</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    this.props.toggelPickup(),
                      this.props.setRenderPoly(false),
                      this.props.setRegion(
                        this.props.user_coordinate.longitude,
                        this.props.user_coordinate.latitude
                      );
                  }}
                >
                  <Text style={styles.buttonText}>Don't Pickup</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      );
    } else {
      return (
        <Modal
          animationType="slide"
          trasnparent={false}
          visible={this.props.showModal}
        >
          <View style={styles.root}>
            <View style={styles.container}>
              <Text style={styles.title}>
                Are you sure you want to cancel the pickup?
              </Text>
              <View style={styles.iconContainer}>
                <TouchableOpacity
                  onPress={() => {
                    this.props.toggelPickup(), this.props.setRenderPoly(false);
                    this.props.setRegion(
                      this.props.user_coordinate.longitude,
                      this.props.user_coordinate.latitude
                    );
                  }}
                >
                  <Text style={styles.buttonText}>Yes</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    this.props.toggelPickup();
                    this.props.setRegion(
                      this.props.user_coordinate.longitude,
                      this.props.user_coordinate.latitude
                    );
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
}
