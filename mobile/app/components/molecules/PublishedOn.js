import React from "react";
import { Text } from "../atoms";
import { StyleSheet } from "react-native";
export default (props) => {
  const { date } = props;
  return <Text style={styles.date}>{date}</Text>;
};
const styles = StyleSheet.create({
  date: {
    flex: 1,
    alignSelf: "flex-start",
  },
});
