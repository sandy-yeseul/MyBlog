import React , {useState} from "react";
import { StyleSheet } from "react-native";
import symbolicateStackTrace from "react-native/Libraries/Core/Devtools/symbolicateStackTrace";
import { COLORS, theme } from "../../constants";
import {Button, Div, P} from '../components/atoms';

export default () => {
  const [name, setName] = useState('LaLaLiLaLa')
  return (
    <>
    <Div style={styles.container}>
      <P>Hello, {name}!</P>
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