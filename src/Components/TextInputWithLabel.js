import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../styles/responsiveSize';
import colors from '../styles/colors';
import commonStyles, {hitSlopProp} from '../styles/commonStyles';
import fontFamily from '../styles/fontFamily';

const TextInputWithLabel = ({
  label,
  onChangeText,
  value,
  active = false,
  secureTextEntry = false,
  rightIcon,
  customTextStyle = {},
  placeholder = '',
  onPress = () => {},
  onPressRightIcon = () => {},
  onFocus = () => {},
  onBlur = () => {},
  themeColor = '#45c9cb',
  textStyle = {},
  ...rest
}) => {
  let currentColor = active ? themeColor : colors.textGrey;
  return (
    <View style={{marginBottom: moderateScaleVertical(15)}}>
      <Text
        style={{
          ...commonStyles.fontSize14,
          color: currentColor,
          marginBottom: moderateScaleVertical(7),
          fontSize: 25,
          ...textStyle,
        }}>
        {label}
      </Text>
      <View style={{flexDirection: 'row'}}>
        <TextInput
          {...rest}
          placeholder={placeholder}
          placeholderTextColor={currentColor}
          secureTextEntry={secureTextEntry}
          onFocus={onFocus}
          onBlur={onBlur}
          style={{
            flex: 1,
            ...styles.textInput,
            borderColor: currentColor,
            ...customTextStyle,
            color: themeColor,
          }}
          onChangeText={onChangeText}
          value={value}
        />
        {!!rightIcon && (
          <TouchableOpacity
            hitSlop={hitSlopProp}
            onPress={onPressRightIcon}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: 6,
            }}>
            <Image source={rightIcon} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default TextInputWithLabel;

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: colors.themeMain,
    height: moderateScaleVertical(49),
    fontSize: moderateScaleVertical(17.5),
    fontFamily: fontFamily.regular,
    paddingVertical: 0,
    paddingHorizontal: moderateScaleVertical(16),
    textAlignVertical: 'center',
  },
});
