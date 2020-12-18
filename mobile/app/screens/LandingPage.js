import React from "react";
import { StyleSheet } from "react-native";
import { Text, TouchHighlight, BgImage } from "../components/atoms";
import { COLORS, theme, images } from "../../constants";

export default ({ navigation }) => {
  return (
    <>
      <TouchHighlight
        style={styles.container}
        onPress={() => navigation.navigate("List")}
      >
        <BgImage  style={styles.bgImage} source={images.landing}>
          <Text style={styles.text}>i'm not ready</Text>
        </BgImage >
      </TouchHighlight>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: "center",
    justifyContent: "center",
  },
  bgImage: {
    flex: 1,
    resizeMode: 'cover',
    width: "100%",
    height: "100%",
    justifyContent: 'center',
    alignItems: 'center'
  },
  text:{
    padding: theme.SIZES.base,
    backgroundColor: 'white',
    color: 'black'
  }
});
