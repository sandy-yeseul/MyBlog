import React, { useState } from "react";
import { TextInput, StyleSheet } from "react-native";
import { COLORS, theme } from "../../constants";
import { Button, Div } from "../components/atoms";
export default ({navigation}) => {
  const [Title, setTitle] = useState('');
  const [Content, setContent] = useState('');
  const submitHandler = async() =>{
    const method = "POST";
    const headers= {Accept: 'application/json', 'Content-Type': 'application/json'}
    const body = JSON.stringify({
      title: Title, 
      publishedOn: new Date(), 
      content: Content, 
      image: "https://picsum.photos/300/200"});
      const result = await fetch("http://192.168.124.64:2020/api/articles", {
        method: method, headers: headers, body: body
      })
      const resJson = await result.json();
      if(resJson._id) navigation.navigate('Detail', {id: resJson._id})
  }
  return (
    <Div style={styles.container}>
      <TextInput
        style={styles.title}
        value={Title}
        onChangeText={(text) => setTitle(text)}
        textContentType="emailAddress"
        placeholder="Title"
      />
      <TextInput
        style={styles.content}
        value={Content}
        onChangeText={(text) => setContent(text)}
        multiline
        numberOfLines={4}
        placeholder="Content"
      />
      <Div
        style={styles.btn}>
      <Button
        title="Submit"
        onPress={submitHandler}
      /></Div>
    </Div>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: "flex-start",
    justifyContent: "flex-start",
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
  btn: {
    marginTop: theme.SIZES.padding,
    alignSelf: 'center'
  },
  title:{
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
  content:{
    width: '100%',
    height: 300,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: theme.SIZES.padding
  }
});
