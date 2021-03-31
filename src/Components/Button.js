import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Button = ({onPress = () => {}, label = "", styleText = {}, styleButton = {}}) =>  {
  return (
    <TouchableOpacity
      style={styleButton}
      onPress={onPress}>
      <Text style={styleText}>{label}</Text>
    </TouchableOpacity>
  );
}
// () => this.loginClicked()  styles.loginText
export default Button;
