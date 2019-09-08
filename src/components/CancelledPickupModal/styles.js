import { StyleSheet, Dimensions } from "react-native";
var width = Dimensions.get("window").width;
var height = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: width,
    height: height,
    backgroundColor: "#EBB759",
    justifyContent: "space-evenly",
    paddingBottom: 20
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    paddingTop: 30
  },
  heading: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    paddingTop: 30
  },
  input: {
    color: "white",
    borderBottomWidth: 1,
    borderBottomColor: "white",
    margin: 25,
    fontSize: 16
  },
  buttonText: {
    color: "white",
    fontSize: 30,
    textDecorationLine: "underline",
    fontWeight: "bold",
    textAlign: "center"
  }
});

export default styles;
