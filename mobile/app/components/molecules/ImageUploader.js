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
    return permitted;
  };
  const pickImage = async () => {
    const permission = await isPermitted();
    if (permission) {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      console.log(result);
      if (!result.canceled) setImage(result.uri);
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