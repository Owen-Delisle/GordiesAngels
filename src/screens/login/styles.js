import { StyleSheet, Dimensions } from "react-native";
var width = Dimensions.get("window").width;
var height = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: width,
    height: height * 2,
    backgroundColor: "#1D2C4D"
  },
  register: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    paddingTop: 50
  },
  image: {
    height: 167,
    width: 234,
    alignSelf: "center",
    margin: 50
  },
  input: {
    color: "white",
    borderBottomWidth: 1,
    borderBottomColor: "white",
    margin: 25,
    fontSize: 16
  },
  button: {
    backgroundColor: "white",
    height: 45,
    width: 250,
    borderRadius: 40,
    alignSelf: "center"
  },
  text: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
    marginTop: 12
  },
  loginText: {
    textAlign: "center",
    color: "black",
    fontSize: 16,
    marginTop: 12
  },
  form: {
    alignContent: "flex-end"
  }
});

export default styles;
