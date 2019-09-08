import React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import { sharedNavigationOptions } from "./config";
import { Image } from "react-native";

import MainScreen from "../screens/main";
import ProfileScreen from "../screens/profile";
import TowScreen from "../screens/tow";

const MainStack = createStackNavigator(
  {
    Main: MainScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);

const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);

const TowStack = createStackNavigator(
  {
    Tow: TowScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);

export const AppStack = createBottomTabNavigator(
  { Tow: TowStack, Main: MainStack, Profile: ProfileStack },
  {
    initialRouteName: "Main",
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let image;
        let style = { marginBottom: 25 };
        let showStyle = true;

        if (routeName === "Main") {
          tabBarVisible: false;
          focused
            ? (image = require("../assets/mapicon.png"))
            : (image = require("../assets/mapicon.png"));
        } else if (routeName === "Profile") {
          tabBarVisible: false;
          focused
            ? (image = require("../assets/profileicon.png"))
            : (image = require("../assets/profileicon.png"));
        } else if (routeName === "Tow") {
          showStyle = false;
          focused
            ? (image = require("../assets/towicon.png"))
            : (image = require("../assets/towicon.png"));
        }
        return (
          <Image style={(style = { height: 45, width: 45 })} source={image} />
        );
      }
    }),
    tabBarOptions: {
      showLabel: false,
      style: {
        backgroundColor: "#1D2C4D",
        height: 50
        // borderTopColor: "white",
        // borderTopWidth: 2
      },
      activeBackgroundColor: "#1F5163"
    }
  }
);
