import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ViewImage from "./app/screens/ViewImage";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  return <ViewImage />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
