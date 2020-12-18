import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";
import { Div, Text } from "../components/atoms";
export default ({ route, navigation }) => {
  const { id } = route.params;
  // console.log(id)
  const [Post, setPost] = useState();
  const getData = async () => {
    try {
      const result = await fetch(
        `http://192.168.124.64:2020/api/articles/${id}`
      );
      const resJson = await result.json();
      setPost(resJson)
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {Post && (
        <Div style={styles.container}>
          <Text style={styles.title}>{Post.title}</Text>
          <Text style={styles.date}>{Post.publishedOn}</Text>
          <Text style={styles.content}>{Post.content}</Text>
        </Div>
      )}
    </>
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
