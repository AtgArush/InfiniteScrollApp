import {StyleSheet} from 'react-native';
// import colors from '../../styles/colors';

const styles = props => {
  let colors = props;
  return StyleSheet.create({
    navbar: {
      height: 70,
      backgroundColor: colors.taskBar,
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
    toggleImage: {
      height: 45,
      width: 45,
      tintColor: colors.apiTheme,
    },
    themeToggleBox: {
      position: 'absolute',
      top: 10,
      right: 10,
    },
    crossImage: {
      height: 50,
      width: 50,
      marginLeft: 10,
    },
    navbarTopText: {
      fontSize: 20,
      fontWeight: 'bold',
      //   marginTop: 5,
      marginLeft: 10,
      color: colors.barText,
    },
    bodyContainer: {
      flex: 1,
      display: 'flex',
      backgroundColor: colors.themeTwo,
    },
    textInput: {
      borderWidth: 0,
      borderBottomWidth: 1,
      borderBottomColor: colors.apiTheme,
      color: colors.themeDark,
    },
    searchBox: {
      backgroundColor: 'white',
      paddingHorizontal: 25,
      marginTop: 15,
      marginHorizontal: 10,
      borderRadius: 10,
      marginBottom: 15,
    },
  });
};

export default styles;
