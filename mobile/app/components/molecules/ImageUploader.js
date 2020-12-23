import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { Platform } from "react-native";
import { Button } from "../atoms";

export default (props) => {
  const {setImage} = props
  const isPermitted = async () => {
    let permitted = false;
    if (Platform.OS !== "web") {
      const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status === "granted") permitted = true;
    }
    if(Platform.OS === "web") permitted = true;
    return permitted;
  };
  const pickImage = async () => {
    const permission = await isPermitted();
    if (permission) {
      let {cancelled, uri} = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: false,
        aspect: [4, 3],
        quality: 1,
      });
      console.log(uri)
      if (!cancelled) setImage(uri);
    } else {
      alert("sorry! need permission");
    }
  };
  return (
    <>
      <Button title="Pick image" onPress={pickImage} />
    </>
  );
};
