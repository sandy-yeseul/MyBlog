import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "../atoms";

export default (props) => {
  const { title } = props;
  return <Text style={styles.title}>{title}</Text>;
};
const styles = StyleSheet.create({
  title: { flex: 1, fontWeight: "600", fontSize: 35 },
});
