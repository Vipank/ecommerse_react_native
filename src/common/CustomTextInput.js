import {View, Text} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-gesture-handler';

const CustomTextInput = ({value, onChangeText,style, ...props}) => {
  return (
      <TextInput
        style = {style}
        value={value}
        onChangeText={onChangeText}
        {...props}
      />
  );
};

export default CustomTextInput;
