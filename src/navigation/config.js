import React from "react";
import { Header } from "react-navigation";

export const sharedNavigationOptions = () => ({
  headerBackTitle: null,
  header: props => <Header {...props} />,

  headerStyle: {
    backgroundColor: "#1D2C4D"
  }
});
