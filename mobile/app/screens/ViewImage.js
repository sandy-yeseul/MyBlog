import React from "react";
import { Image, StyleSheet, View } from "react-native";

export default function ViewImage(props) {
  return (
    <>
    <View style={styles.container}>
        <View style={styles.closeIcon} ></View>
      <Image
        style={styles.image}
        source={{ uri: "https://picsum.photos/200/300" }}
      /></View>
    </>
  );
}
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
  container: {
      backgroundColor: '#000',
      flex: 1
  },
  closeIcon:{
      width: 50,
      height: 50,
      backgroundColor: "#E18391",
      position: 'absolute',
      top: 40,
      left: 30,
  }
});
