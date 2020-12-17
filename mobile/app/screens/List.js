import React, { useState, useEffect } from "react";
import { Image, StyleSheet } from "react-native";
import { Div, Text, List, TouchOpacity, Button } from "../components/atoms";
import { COLORS, theme, images } from "../../constants";
import { Card } from "../components/molecules";
export default ({ navigation }) => {
  const [list, setList] = useState(sampleData());
  return (
    <Div style={styles.container}>
      <List
        style={styles.list}
        data={list}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <TouchOpacity
          // onPress={() => navigation.push("Detail")}
          >
            <Card
              imageUri={item.image}
              title={item.title}
              publishedOn={item.publishedOn}
            />
          </TouchOpacity>
        )}
      />
      <Button title="Post" onPress={() => navigation.navigate("Post")} />
    </Div>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: "center",
    justifyContent: "center",
    padding: theme.SIZES.base,
  },
  list: {
    width: "100%",
  },
});
const sampleData = () => {
  return [
    {
      _id: "01076e0f643b43d48ff47409ab4a0366",
      title: "from from from ",
      publishedOn: "2020-01-01",
      content: "to to to",
      image: "https://picsum.photos/300",
      hash: "c6ecb0a4551337a477e0b4115dd78da4",
    },
    {
      _id: "ecbe36d419a946e2b4c28a3617247c81",
      title: "Don't stop the music",
      publishedOn: "2020-10-11",
      content: "DJ DJ PLZ DONT STOP THE MUZIK",
      image: "https://picsum.photos/300",
      hash: "5e6d98cb6f2112c08230db7b69cf0c36",
    },
    {
      _id: "43fed77c2af340e09e409bcf6b797fcb",
      title: "from from from ",
      publishedOn: "2020-01-01",
      content: "to to to",
      image: "https://picsum.photos/200/300",
      hash: "c6ecb0a4551337a477e0b4115dd78da4",
    },
    {
      _id: "6e22a4e46efc48a6b7671d7e357dad33",
      title: "A have that ",
      publishedOn: "2020-01-01",
      content: "landscape",
      image: "https://picsum.photos/200/300",
      hash: "992763c3260eacff8cdc4c8bba147554",
    },
  ];
};
