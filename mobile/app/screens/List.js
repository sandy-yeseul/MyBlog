import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Div, Text, List, ScrollDiv } from "../components/atoms";
import { COLORS, theme, images } from "../../constants";
export default ({ navigation }) => {
  const [list, setList] = useState([
    { key: "1", title: "1", PublishedOn: "2020-01-01" },
    { key: "2", title: "style", PublishedOn: "2020-03-11" },
    { key: "3", title: "What We want to do", PublishedOn: "2020-08-09" },
    { key: "4", title: "Output", PublishedOn: "2020-01-20" },
    { key: "8", title: "Flex", PublishedOn: "2020-10-18" },
    { key: "71", title: "Messages", PublishedOn: "2020-12-21" },
    { key: "18", title: "Star", PublishedOn: "2020-12-31" },
  ]);
  return (
    <Div style={styles.container}>
      <List
      style={styles.list}
        data={list}
        renderItem={({ item }) => (
          <Div style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.date}>{item.PublishedOn}</Text>
          </Div>
          // <Text
          // onPress={()=> navigation.navigate('Landing')}
          // style={styles.item}
          // >
          //   {item.PublishedOn} :: {item.title}
          // </Text>
        )}
      />
    </Div>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: "center",
    justifyContent: "center",
    padding: theme.SIZES.padding,
    width: '100%',
    backgroundColor: 'yellow'
  },
  list:{
    width: '100%'
  },
  card: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: "space-between",
    alignItems: "center",
    width: '100%',
    backgroundColor: 'gray'
  },
  title:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: 'black',
  },
  date:{
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'yellowgreen'
  }
});
