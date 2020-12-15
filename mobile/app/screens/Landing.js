import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Button, Div, Image, Text, TextInput } from "../components/atoms";
import { COLORS, theme, images } from "../../constants";

export default () => {
  const [name, setName] = useState("LaLaLiLaLa");
  const updateNameHandler = () => {
    setName("확신")
  }
  return (
    <>
      <Div style={styles.container}>
        <Image source={images.favicon} />
        <Text>Hello, {name}!</Text>
        <Div style={styles.buttonContainer}>
          <TextInput 
          style={styles.textInput}
          placeholder = "그런 밤이 있어"
          value={name}
          onChangeText = {(val) => setName(val)}
           />
          <Button title="update name" onPress={updateNameHandler} />
        </Div>
      </Div>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    marginTop: theme.SIZES.base,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  textInput: {
    borderWidth: 1,
    borderColor: COLORS.gray,
    padding: theme.SIZES.base,
    width: 200
  }
});
