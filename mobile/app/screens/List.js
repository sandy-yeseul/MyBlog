import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Div, Text, List, ScrollDiv } from "../components/atoms";
import { COLORS, theme, images } from "../../constants";
export default () => {
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
    // <ScrollDiv>
    //   <Div style={styles.container1}>
    //     {list.map((item, i) => {
    //       return (
    //         <Text key={i} style={styles.item}>
    //           {item.PublishedOn} :: {item.title}
    //         </Text>
    //       );
    //     })}
    //   </Div>
    // </ScrollDiv>
    <Div style={styles.container1}>
      <List
        data={list}
        renderItem  ={({item}) => (
          <Text style={styles.item}>
            {item.PublishedOn} :: {item.title}
          </Text>
        )}
      />
    </Div>
  );
};
const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingLeft: theme.SIZES.padding,
    paddingTop: theme.SIZES.padding,
  },
  item: {
    height: 500,
  },
});
