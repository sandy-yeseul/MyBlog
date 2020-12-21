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
  },
  textField: { flexDirection: "row", padding: theme.SIZES.base },
  title: { flex: 2, fontSize: 20, fontWeight: "bold" },
});
