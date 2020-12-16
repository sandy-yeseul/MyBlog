import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Landing, List } from "../app/screens";

const { Navigator, Screen } = createStackNavigator();

const LandingNavigator = () => {
  return (
    <Navigator initialRouteName="List">
      <Screen
        name="Landing"
        component={Landing}
        options={{
          headerShown: false,
        }}
      />
      <Screen name="List" component={List} />
    </Navigator>
  );
};
export default () => (
  <NavigationContainer>
    <LandingNavigator />
  </NavigationContainer>
);
