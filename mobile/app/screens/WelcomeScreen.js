import React from "react";
import {
  StyleSheet,
  Text,
  StatusBar,
  ImageBackground,
  View,
  Image,
  Button,
} from "react-native";

export default function WelcomeScreen(props) {
  return (
    <>
      <ImageBackground
        style={styles.background}
        source={{ uri: "https://picsum.photos/200/300" }}
      >
        <Image style={styles.logo} source={require("../assets/favicon.png")} />
        <Text style={styles.text}>Among us</Text>
        <View style={styles.loginButton}><Text>Register</Text></View>
        <View><Button title="Sign In" color="#1B063F" style={styles.registerButton}/></View>
      </ImageBackground>
    </>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    justifyContent: "flex-end",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#E18391",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#1B063F",
  },
  logo:{
    alignSelf: 'center',
    position: 'absolute',
    top: 150
  },
  text:{
      alignSelf: 'center',
      position: 'absolute',
      top: 200
  }
});
