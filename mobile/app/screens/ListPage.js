import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import {
  Div,
  List,
  TouchOpacity,
  Button,
} from "../components/atoms";
import { COLORS, theme } from "../../constants";
import { Card } from "../components/organisms";
export default ({ navigation }) => {
  const ipAddrss = "192.168.124.64";
  const [list, setList] = useState();
  const [refreshing, setRefreshing] = useState(false);
  const PostBtnHandler = async () => {
    navigation.navigate("Post");
  };
  const getData = async () => {
    try {
      const res = await fetch("http://192.168.124.64:2020/api/articles");
      const resJson = await res.json();
      const care = await formatData(resJson);
      setList(care);
    } catch (err) {
      console.log(err);
    }
  };
  const onRefresh = async () => {
    setRefreshing(true);
    getData().then(setRefreshing(false))
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Div style={styles.container}>
      {list && (
        <List
          style={styles.list}
          data={list}
          keyExtractor={(item) => item._id}
          refreshing={refreshing}
          onRefresh={onRefresh}
          renderItem={({ item }) => (
            <TouchOpacity
              onPress={() => navigation.navigate("Detail", { id: item._id })}
            >
              <Card
                imageUri={item.image}
                title={item.title}
                publishedOn={item.publishedOn}
              />
            </TouchOpacity>
          )}
        />
      )}
      <Button title="Post" onPress={PostBtnHandler} />
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
const formatData = (list) => {
  const sample = [...list];
  const bitten = sample.map((item) => {
    if (!item.image) item.image = "https://picsum.photos/300";
    return item;
  });
  return bitten.reverse();
};
