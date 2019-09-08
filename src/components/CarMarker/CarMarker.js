import React from "react";
import { Image } from "react-native";

const markerImage = require("../../assets/towicon.png");

export default class CarMarker extends React.Component {
  render() {
    return <Image source={markerImage} />;
  }
}
