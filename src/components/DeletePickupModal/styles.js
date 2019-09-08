import { StyleSheet, Dimensions } from "react-native";
var width = Dimensions.get("window").width;
var height = Dimensions.get("window").height;

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#EBB759",
    height: height,
    width: width,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    display: "flex",
    width: width - width / 8,
    height: height / 2,
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
    fontWeight: "bold"
  },
  iconContainer: {
    display: "flex",
    flexDirection: "row",
    width: width - width / 8,
    justifyContent: "space-evenly"
  },
  text: {
    textAlign: "center",
    color: "black",
    fontSize: 16,
    marginTop: 12
  }
});

export default styles;
