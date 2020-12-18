import React from "react";
import { Div, Image } from "../atoms";
import { StyleSheet } from "react-native";
import { theme } from "../../../constants";

export default (props) => {
  const { imageUri } = props;
  return (
    <Div style={styles.imageContainer}>
      <Image source={{ uri: imageUri }} resizeMode="cover" />
    </Div>
  );
};
const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
    height: 150,
    borderTopLeftRadius: theme.SIZES.radius,
    borderTopRightRadius: theme.SIZES.radius,
    overflow: "hidden",
  },
});
