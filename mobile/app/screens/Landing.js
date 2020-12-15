import React , {useState} from "react";
import { StyleSheet } from "react-native";
import { COLORS, theme } from "../../constants";
import {Button, Div, Text} from '../components/atoms';

export default () => {
  const [name, setName] = useState('LaLaLiLaLa')
  return (
    <>
    <Div style={styles.container}>
      <Text>Hello, {name}!</Text>
    </Div>
    <Div style={styles.buttonContainer} >
      <Button title = "update state" />
    </Div>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonContainer: {
    marginTop: theme.SIZES.base
  }
})