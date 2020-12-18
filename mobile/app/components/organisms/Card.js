import React from "react";
import { StyleSheet } from "react-native";
import { Div, Text } from "../atoms";
import { theme } from "../../../constants";
import { CardCvImg, PublishedOn } from "../molecules";

export default ({ imageUri, title, publishedOn }) => {
  return (
    <Div style={styles.card}>
      <CardCvImg imageUri={imageUri} />
      <Div style={styles.textField}>
        <Text style={styles.title}>{title}</Text>
        <PublishedOn date={publishedOn} />
      </Div>
    </Div>
  );
};
const styles = StyleSheet.create({
  card: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: theme.SIZES.base,
    borderRadius: theme.SIZES.radius,
    borderRightWidth: 2,
    borderBottomWidth: 1,
    borderLeftWidth: 0.5,
    borderColor: "gray",
  },
  imageField: {
    width: "100%",
    height: 150,
    borderTopLeftRadius: theme.SIZES.radius,
    borderTopRightRadius: theme.SIZES.radius,
    overflow: 'hidden'
  },
  textField: { flexDirection: "row", padding: theme.SIZES.base },
  title: { flex: 2, fontSize: 20, fontWeight: "bold" },
  
});
