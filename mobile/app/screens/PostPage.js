import React, { useState } from "react";
import { TextInput, StyleSheet } from "react-native";
import { COLORS, theme } from "../../constants";
import { Button, Div } from "../components/atoms";
import { ImageUploader, DismissKeyboard } from "../components/molecules";
export default ({ navigation }) => {
  const [Title, setTitle] = useState("");
  const [Content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const uriToBlob = async() =>{
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function() {
        resolve(xhr.response)
      };
      xhr.onerror = function(){
        reject(new Error("uriToBlob failed"))
      };
      xhr.responseType = "blob";
      xhr.open('GET', image, true);
      xhr.send(null)
    })
  }
  const getImageBlob = async() =>{
    try{
      const response = await fetch(image);
      const blob = await response.blob();
      return blob;
    }catch(err){
      console.log(err)
    }
  }
  const getFilename = (image) => {
    const filename = image.split('/').pop();
    return filename
  }
  const getType = async(filename) =>{
    const match = filename.split('.');
    const type = match?  `image/${match[1]}` : `image`;
    return type
  }
  const submitHandler = async () => {
    try{
      // const filename = getFilename(image);
      // const imageBlob = await getImageBlob()
      const publishedOn = new Date();
      
      const fd = new FormData();
      fd.append('title', Title);
      fd.append('publishedOn', publishedOn);
      fd.append('content', Content);
      // fd.append('image', imageBlob, filename)
      const config={
        method: "POST",
        body: fd,
      }
      fetch("http://192.168.124.64:2020/api/articles", config)
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.error(err))

      // const imageBlob =  await uriToBlob();
      // const formData = new FormData();
      // formData.append('title', Title);
      // formData.append('content', Content);
      // formData.append('publishedOn', new Date());
      // formData.append('image', imageBlob);
      // const body = JSON.stringify({
      //   title: Title,
      //   publishedOn: new Date(),
      //   content: Content,
      //   image: 'http://',
      // });
      // const result = await fetch("http://192.168.124.64:2020/api/articles", {
      //   method: "POST",
      //   body: formData,
      // });
      // const resJson = await result.json();
      // // if (resJson._id) navigation.navigate("Detail", { id: resJson._id });
      // console.log(resJson)
    }
    catch(err){
      console.log(err)
    }
    
  };
  return (
    <DismissKeyboard>
      <Div style={styles.container}>
        <TextInput
          style={styles.title}
          value={Title}
          onChangeText={(text) => setTitle(text)}
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
        <ImageUploader setImage={setImage} />
        <Div style={styles.btn}>
          <Button title="Submit" onPress={submitHandler} />
        </Div>
      </Div>
    </DismissKeyboard>
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
    alignSelf: "center",
  },
  title: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
  },
  content: {
    width: "100%",
    height: 300,
    borderColor: "gray",
    borderWidth: 1,
    marginTop: theme.SIZES.padding,
  },
});
