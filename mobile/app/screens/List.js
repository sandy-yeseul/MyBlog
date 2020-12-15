import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Div, Text, List, ScrollDiv } from "../components/atoms";
import { COLORS, theme, images } from "../../constants";
export default () => {
  const [list, setList] = useState([
    { title: "1", PublishedOn: "2020-01-01" },
    { title: "style", PublishedOn: "2020-03-11" },
    { title: "What We want to do", PublishedOn: "2020-08-09" },
    { title: "Output", PublishedOn: "2020-01-20" },
    { title: "Flex", PublishedOn: "2020-10-18" },
    { title: "Messages", PublishedOn: "2020-12-21" },
    { title: "Star", PublishedOn: "2020-12-31" },
  ]);
  return (
    <ScrollDiv>
      <Div style={styles.container1}>
        {list.map((item, i) => {
          return (
            <Text key={i} style={styles.item}>
              {item.PublishedOn} :: {item.title}
            </Text>
          );
        })}
      </Div>
    </ScrollDiv>
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
