import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Landing, List, Detail, Post } from "../app/screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const { Navigator, Screen } = createStackNavigator();
const Tab = createBottomTabNavigator();

const StackNavigator = () => {
  return (
    <Navigator initialRouteName="List">
      {/* <Screen
        name="Landing"
        component={Landing}
        options={{
          headerShown: false,
        }}
      /> */}
      <Screen name="List" component={List} />
      <Screen name="Detail" component={Detail} />
      <Screen name="Post" component={Post} />
    </Navigator>
  );
};
const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Landing" component={Landing} />
      <Tab.Screen name="List" component={List} />
      <Tab.Screen name="Detail" component={Detail} />
      <Tab.Screen name="Post" component={Post} />
    </Tab.Navigator>
  );
};

export default () => (
  <NavigationContainer>
    <StackNavigator />
  </NavigationContainer>
);