import React, { Component } from "react";
import { View, StyleSheet, Image, StatusBar } from "react-native";
import MapView, { PROVIDER_GOOGLE, AnimatedRegion } from "react-native-maps";
import Polyline from "@mapbox/polyline";
import MapStyle from "./MapStyle";
import { Marker } from "react-native-maps";
import PickupModal from "../../components/PickupModal";
import { graphql, compose } from "react-apollo";
import { DeletePullRequest } from "../../api";
import CancelledPickupModal from "../../components/CancelledPickupModal";
import DeletePickupModal from "../../components/DeletePickupModal";
import config from "../../../config";

const markerImage = require("../../assets/caricon.png");

const apiKey = config.API_KEY;

const getCurrentLocation = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      position => resolve(position),
      e => reject(e)
    );
  });
};

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      region: new AnimatedRegion({}),
      user_coordinate: {},
      destination_coordinate: {},
      poly_coords: [],
      showPickupModal: false,
      showDeletePickupModal: false,
      pickupInfo: {},
      pickupInfoLoading: false,
      userFocusedPR: "",
      deleteLocationID: "",
      pickupBid: ""
    };

    this.mergeLot = this.mergeLot.bind(this);
    this.onRegionChange = this.onRegionChange.bind(this);
    this.setDeleteLocationID = this.setDeleteLocationID.bind(this);
  }

  componentDidMount() {
    this.props.subscribeToNewPullRequests(this.props.subscribeToMore);
    this.props.subscribeToDeletedPullRequests(this.props.subscribeToMore);
    return getCurrentLocation().then(position => {
      if (position) {
        (this.initialRegion = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.5,
          longitudeDelta: 0.5
        }),
          this.setState({
            user_coordinate: {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
            }
          });
      }
    });
  }

  callPullRequests = async () => {
    response = await this.props.pullRequests;
    return response.data[0];
  };

  mergeLot() {
    if (
      this.state.user_coordinate.latitude != null &&
      this.state.user_coordinate.longitude != null &&
      this.state.destination_coordinate.latitude != null &&
      this.state.destination_coordinate.longitude != null
    ) {
      let concatUserLoc =
        this.state.user_coordinate.latitude +
        "," +
        this.state.user_coordinate.longitude;

      let concatDestLoc =
        this.state.destination_coordinate.latitude +
        "," +
        this.state.destination_coordinate.longitude;

      this.getDirections(concatUserLoc, concatDestLoc);
    }
  }

  onRegionChange(region) {
    this.setState({ region });
  }

  setRegionOnMarkerClick(longitude, latitude) {
    this.map.animateToRegion({
      longitude: longitude,
      latitude: latitude,
      latitudeDelta: 0.03,
      longitudeDelta: 0.03
    });

    if (modalTimer) {
      clearTimeout(timerid);
    }

    let modalTimer = setTimeout(
      () => this.setState({ showPickupModal: true }),
      500
    );
  }

  setRegion(longitude, latitude) {
    if (modalTimer) {
      clearTimeout(timerid);
    }

    let modalTimer = setTimeout(
      () =>
        this.map.animateToRegion({
          longitude: longitude,
          latitude: latitude,
          latitudeDelta: 0.5,
          longitudeDelta: 0.5
        }),
      100
    );
  }

  async getDirections(startLoc, destinationLoc) {
    this.setState({ pickupInfoLoading: true });
    try {
      let resp = await fetch(
        `https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc}&destination=${destinationLoc}&mode=driving&key=${apiKey}`
      );
      let respJson = await resp.json();
      let endAddress = respJson.routes[0].legs[0].end_address;
      let legDistance = respJson.routes[0].legs[0].distance.text;
      let legDuration = respJson.routes[0].legs[0].duration.text;
      let points = Polyline.decode(respJson.routes[0].overview_polyline.points);
      let poly_coords = points.map((point, index) => {
        return {
          latitude: point[0],
          longitude: point[1]
        };
      });
      this.setState({
        poly_coords: poly_coords,
        pickupInfo: {
          endAddress: endAddress,
          legDistance: legDistance,
          legDuration: legDuration
        }
      });
      this.setState({ pickupInfoLoading: false });
      return poly_coords;
    } catch (error) {
      alert(error);
      return error;
    }
  }

  setDeleteLocationID(locationID) {
    this.setState({ deleteLocationID: locationID });
  }

  toggelPickup() {
    this.setState({ showPickupModal: !this.state.showPickupModal });
  }

  toggelDeletePickup() {
    this.setState({ showDeletePickupModal: !this.state.showDeletePickupModal });
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <MapView
          ref={map => (this.map = map)}
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          customMapStyle={MapStyle}
          initialRegion={this.initialRegion}
          onRegionChange={region => this.onRegionChange(region)}
          showsUserLocation={true}
        >
          {this.props.renderPoly && (
            <MapView.Polyline
              coordinates={this.state.poly_coords}
              strokeWidth={4}
              strokeColor="#ff11c7"
            />
          )}

          {this.props.data.pullRequests.map(location => (
            <Marker
              onPress={() => {
                if (location.userId != this.props.userId) {
                  this.setRegionOnMarkerClick(
                    location.longitude,
                    location.latitude,
                    this.map
                  );
                  this.setState(
                    {
                      destination_coordinate: {
                        longitude: location.longitude,
                        latitude: location.latitude
                      },
                      // showPickupModal: true,
                      userFocusedPR: location.id,
                      pickupBid: location.bid
                    },
                    () => {
                      this.mergeLot();
                    }
                  );
                } else {
                  this.setState({ showDeletePickupModal: true });
                  this.setDeleteLocationID(location.id);
                }
              }}
              key={location.id}
              coordinate={{
                longitude: location.longitude,
                latitude: location.latitude
              }}
            >
              <Image
                style={(style = { height: 45, width: 45 })}
                source={markerImage}
              />
            </Marker>
          ))}
        </MapView>
        <PickupModal
          showModal={this.state.showPickupModal}
          toggelPickup={this.toggelPickup.bind(this)}
          setRenderPoly={this.props.setRenderPoly}
          userFocusedPR={this.state.userFocusedPR}
          pickupInfo={this.state.pickupInfo}
          pickupInfoLoading={this.state.pickupInfoLoading}
          renderPoly={this.props.renderPoly}
          pickupBid={this.state.pickupBid}
          setRegion={this.setRegion.bind(this)}
          user_coordinate={this.state.user_coordinate}
        />
        <CancelledPickupModal
          toggelCancelledPickup={this.props.toggelCancelledPickup}
          showCancelledPickupModal={this.props.showCancelledPickupModal}
        />

        <DeletePickupModal
          toggelDeletePickup={this.toggelDeletePickup.bind(this)}
          showDeletePickupModal={this.state.showDeletePickupModal}
          deletePullRequest={this.props.deletePullRequest}
          deleteLocationID={this.state.deleteLocationID}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject
  },
  map: {
    ...StyleSheet.absoluteFillObject
  },
  marker: {
    marginLeft: 46,
    marginTop: 33
  }
});

export default compose(
  graphql(DeletePullRequest, { name: "deletePullRequest" })
)(Main);
