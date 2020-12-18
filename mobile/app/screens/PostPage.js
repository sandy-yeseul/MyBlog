import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { COLORS, theme } from "../../constants";
import { Button } from "../components/atoms";
export default () => {
  const [value, setValue] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Title</Text>
      <TextInput
        style={styles.textInput}
        value={value}
        onChangeText={(text) => setValue(text)}
        textContentType="emailAddress"
        placeholder="Title"
      />
      {/*  no need
      <Text style={styles.label}>Created Time</Text> 
      <TextInput
        style={styles.textInput}
        value={value}
        onChangeText={(text) => setValue(text)}
        keyboardType="number-pad" // NOTE: numeric is not working in iphone? number pad working
        placeholder="created on date conversation but it's numeric pad"
      /> */}
      <Text style={styles.label}>Content</Text>
      <TextInput
        style={{ height: 100, borderColor: "gray", borderWidth: 1, width: 200 }}
        value={value}
        onChangeText={(text) => setValue(text)}
        multiline
        numberOfLines={4}
        placeholder="Content"
      />
      <Button
        style={styles.Button}
        title="Submit"
        onPress={() => console.log("submitted")}
      />
    </View>
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
  textInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: 200,
  },
  label: {
    alignSelf: "flex-start",
    paddingLeft: 90,
    paddingTop: theme.SIZES.padding,
  },
  Button: {
    margin: theme.SIZES.padding,
  },
});
