import { StyleSheet, Dimensions } from "react-native";
var width = Dimensions.get("window").width;
var height = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    height: height,
    width: width
  },
  map: {
    display: "flex",
    // flexDirection: "column",
    // alignItems: "flex-end",
    height: height,
    width: width
  }
});

export default styles;
