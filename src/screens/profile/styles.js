import { StyleSheet, Dimensions } from "react-native";
var width = Dimensions.get("window").width;
var height = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#1D2C4D",
    width: width,
    height: height - height * 0.05,
    alignItems: "center",
    justifyContent: "space-evenly"
  },

  heading_container: {
    display: "flex",
    width: width,
    alignItems: "center"
  },

  header: {
    color: "white",
    fontSize: 70,
    fontWeight: "bold"
  },
  header_secondary: {
    color: "white",
    fontSize: 45,
    fontWeight: "bold"
  },

  Text: {
    fontWeight: "bold",
    color: "white",
    fontSize: 35,
    marginTop: 12
  },

  button: {
    backgroundColor: "white",
    height: 45,
    width: 250,
    borderRadius: 40,
    alignSelf: "center"
  },
  buttonText: {
    color: "white",
    fontSize: 30,
    textDecorationLine: "underline",
    fontWeight: "bold"
  }
});

export default styles;
