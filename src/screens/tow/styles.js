import { StyleSheet, Dimensions } from "react-native";
import { white } from "ansi-colors";
var width = Dimensions.get("window").width;
var height = Dimensions.get("window").height;

const styles = StyleSheet.create({
  background: {
    width: width,
    height: height * 2,
    backgroundColor: "#1D2C4D"
  },
  container: {
    display: "flex",
    width: width,
    height: height,
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  header: {
    color: "white",
    fontSize: 50,
    fontWeight: "bold"
  },
  header_secondary: {
    color: "white",
    fontSize: 35,
    fontWeight: "bold"
  },
  buttonText: {
    fontWeight: "bold",
    color: "black",
    fontSize: 35,
    marginTop: 12,
    textAlign: "center"
  },
  input: {
    display: "flex",
    color: "white",
    borderBottomWidth: 3,
    borderBottomColor: "white",
    fontSize: 35,
    width: "60%",
    textAlign: "center",
    fontWeight: "bold"
  },
  button: {
    display: "flex",
    backgroundColor: "white",
    height: 60,
    width: 250,
    borderRadius: 15,
    fontWeight: "bold",
    marginBottom: 20
  }
});

export default styles;
