import React from 'react';
import {TextInput} from "react-native"
export default function TextInputComponent({placeholderText,placeholderTextColor, styles  }) {
  return (
    <TextInput
      placeholder={placeholderText}
      placeholderTextColor={placeholderTextColor}
      style={styles}
    />
  );
}
