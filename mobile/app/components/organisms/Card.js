import React from "react";
import { StyleSheet } from "react-native";
import { Div, Text } from "../atoms";
import { theme } from "../../../constants";
import { CardCvImg, PublishedOn } from "../molecules";

export default ({ imageUri, title, publishedOn }) => {
  return (
    <Div>
      <CardCvImg imageUri={imageUri} resizeMode="cover" />
      <Div style={styles.textField}>
        <Text style={styles.title}>{title}</Text>
        <PublishedOn date={publishedOn} />
      </Div>
    </Div>
  );
};
const styles = StyleSheet.create({
  textField: {
    padding: theme.SIZES.base,
  },
  title: { fontSize: 22, fontWeight: "bold", alignSelf: "flex-start" },
});
