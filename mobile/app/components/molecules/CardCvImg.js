import React from "react";
import { Div, Image } from "../atoms";
import { StyleSheet } from "react-native";
import { theme } from "../../../constants";

export default (props) => {
  const { imageUri, resizeMode } = props;
  return (
    <Div style={styles.imageContainer}>
      <Image source={{ uri: imageUri }} resizeMode={resizeMode} />
    </Div>
  );
};
const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
    height: theme.SIZES.height * 0.3 ,
  },
});
