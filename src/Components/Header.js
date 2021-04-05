import React, {useState} from 'react';
import {TouchableOpacity, View, Text, Image, Modal} from 'react-native';
import strings from '../constants/lang/en';
import imagePath from '../constants/imagePath';
import {useNavigation} from '@react-navigation/native';
import colors from '../styles/colors';

function Header({
  styles = {
    navbar: {
      height: 70,
      backgroundColor: colors.white,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    imageBox: {
      position: 'absolute',
      top: 10,
      left: 0,
    },
    navbarLeftImage: {
      width: 50,
      height: 50,
      tintColor: colors.apiTheme,
      marginLeft: 15,
    },
    themeToggleBox: {
      position: 'absolute',
      top: 10,
      right: 10,
    },
    navbarTopText: {
      fontSize: 20,
      fontWeight: 'bold',
      marginLeft: 10,
      color: colors.black,
    },
  },
  toggleTheme = () => {},
  theme,
  renderImage = () => {},
  title = '',
}) {
  const [modalVisible, setmodalVisible] = useState(false);
  const themeColors = ['red', 'yellow', 'blue', 'green'];
  const navigation = useNavigation();
  return (
    <View style={styles.navbar}>
      <TouchableOpacity
        style={styles.imageBox}
        onPress={() => navigation.openDrawer()}>
        <Image
          source={imagePath.hamburgerIcon}
          style={styles.navbarLeftImage}
        />
      </TouchableOpacity>
      <Text style={styles.navbarTopText}> {title} </Text>

      <View style={styles.themeToggleBox}>{renderImage()}</View>
    </View>
  );
}

export default Header;
