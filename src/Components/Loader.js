import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import colors from '../styles/colors';

export default function Loader({isLoading, styles}) {
  if (isLoading) {
    return (
      <View
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: "rgba(0,0,0,0.5)",
          ...styles
        }}>
        <ActivityIndicator color={colors.themeDark} size="large" />
      </View>
    );
  }

  return null;
}
