import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import Navigator from './routes'

// screens
import { Landing, Show, Post, List } from "./app/screens";
import { COLORS, images, SIZES } from "./constants/index";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparent",
  },
};
const Stack = createStackNavigator();
const App = () => {
  return (
    <Navigator />
    // <NavigationContainer theme={theme}>
    //   <Stack.Navigator initialRouteName={""}>
    //     {/* Screens */}
    //     <Stack.Screen
    //       name="Landing"
    //       component={Landing}
    //       options={{
    //         title: null,
    //         headerStyle: {
    //           backgroundColor: COLORS.white,
    //         },
    //         headerLeft: null,
    //         headerRight: () => (
    //           <TouchableOpacity
    //             style={{ marginRight: SIZES.padding }}
    //             onPress={() => console.log("Pressed")}
    //           >
    //             <Image
    //               source={images.splash}
    //               resizeMode="contain"
    //               style={{
    //                 width: 25,
    //                 height: 25,
    //               }}
    //             />
    //           </TouchableOpacity>
    //         ),
    //       }}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
};
export default () => {
  return <App />;
};
