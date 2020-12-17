import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Landing, List, Detail, Post } from "../app/screens";

const { Navigator, Screen } = createStackNavigator();

const LandingNavigator = () => {
  return (
    <Navigator initialRouteName="Post">
      <Screen
        name="Landing"
        component={Landing}
        options={{
          headerShown: false,
        }}
      />
      <Screen name="List" component={List} />
      <Screen name="Detail" component={Detail} />
      <Screen name="Post" component={Post} />
    </Navigator>
  );
};
export default () => (
  <NavigationContainer>
    <LandingNavigator />
  </NavigationContainer>
);
