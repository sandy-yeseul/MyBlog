import React from 'react';
import { Keyboard } from 'react-native';
import { TouchNoEffect } from '../atoms';

export default ({children})=>{
    return(
        <TouchNoEffect onPress={()=> Keyboard.dismiss()}>
            {children}
        </TouchNoEffect>
    )
}