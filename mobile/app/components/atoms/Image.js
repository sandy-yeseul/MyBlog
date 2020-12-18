import React from 'react';
import {Image, StyleSheet} from 'react-native';
export default (props) => {
    return <Image {...props} style={styles.image} resizeMode="contain" />
}
const styles =StyleSheet.create({
    image:{
        width: "100%",
        height: '100%',
    }
})