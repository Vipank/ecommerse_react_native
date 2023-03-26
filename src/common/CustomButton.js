import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const CustomButton = ({onPress, textStyles,buttonText, ...props}) => {
  return (
    <TouchableOpacity onPress={onPress} {...props}>
      <Text style = {textStyles}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
