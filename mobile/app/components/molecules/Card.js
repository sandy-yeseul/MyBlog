import React from "react";
import { StyleSheet } from "react-native";
import { Div, Image, Text } from "../atoms";
import { theme } from "../../../constants";

export default ({ imageUri, title, publishedOn }) => {
  return (
    <Div style={styles.card}>
      <Image style={styles.imageField} source={{ uri: imageUri }} />
      <Div style={styles.textField}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{publishedOn}</Text>
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
  },
  textField: { flexDirection: "row", padding: theme.SIZES.base },
  title: { flex: 2, fontSize: 20, fontWeight: "bold" },
  date: { flex: 1, alignSelf: "center", textAlign: "right" },
});
