import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";
import { Button, Div, Image, Text, ScrollDiv} from "../components/atoms";
import {CardCvImg, PublishedOn, Title} from '../components/molecules'
import { theme } from "../../constants";
export default ({ route, navigation }) => {
  const { id } = route.params;
  const [Post, setPost] = useState();
  const getData = async () => {
    try {
      const result = await fetch(
        `http://192.168.124.64:2020/api/articles/${id}`
      );
      const resJson = await result.json();
      const data = formatData(resJson);
      setPost(data);
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
        <ScrollDiv style={styles.container}>
          <CardCvImg imageUri={Post.image} />
          <Div style={styles.textContainer}>
            <Title title={Post.title} />
           <PublishedOn date={Post.publishedOn} />
            <Text style={styles.content}>{Post.content}</Text>
          </Div>
        </ScrollDiv>
      )}
      <Button title="Go Back List" onPress={()=>navigation.navigate('List')} />
    </>
  );
};
const formatData = (article) => {
  const _article = { ...article };
  if (!_article.image) _article.image = "https://picsum.photos/300/200";
  return _article;
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  imageContainer: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  textContainer: {
    flex: 1,
    padding: theme.SIZES.base,
    marginTop: theme.SIZES.padding
  },
  title: {
    flex: 1,
    fontWeight: "600",
    fontSize: 35,
  },
  date: {
    flex: 0.5,
    paddingTop: theme.SIZES.base,
    borderTopWidth: 1,
    borderColor: 'gray',
    alignSelf: 'flex-start', // make width max-content,
  },
  content: {
    flex: 4,
    paddingTop: theme.SIZES.padding,
  },
});
