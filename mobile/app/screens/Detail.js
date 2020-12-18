import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";
import { Div, Text } from "../components/atoms";
export default ({ route, navigation }) => {
  // const {id} = route.params;
  // console.log(id)
  const [Post, setPost] = useState({
    title: "Physical",
    publishedOn: "2019-09-08",
    content: "Common love isn't for us. \n we created something phenomenon",
  });
  return (
    <Div style={styles.container}>
      <Text style={styles.title}>{Post.title}</Text>
      <Text style={styles.date}>{Post.publishedOn}</Text>
      <Text style={styles.content}>{Post.content}</Text>
    </Div>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  title: {
    flex: 1,
    fontWeight: "900",
    fontSize: 50,
    color: "red",
  },
  date: {
    flex: 0.5,
  },
  content: {
    flex: 4,
  },
});
