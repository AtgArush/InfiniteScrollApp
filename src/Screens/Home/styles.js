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
    navbarLeftImage: 
      {width: 50, height: 50, tintColor: colors.apiTheme, marginLeft: 15
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
      color: colors.barText,
    },
    crossImage: {
      height: 50,
      width: 50,
      marginLeft: 10,
    },
    bodyContainer: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: colors.themeTwo,
    },
    bottomButton: {
      marginHorizontal: 15,
      backgroundColor: colors.white,
      marginBottom: 15,
      width: '80%',
      paddingVertical: 15,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 15,
      marginLeft: '10%',
    },
    bottonButtonText: {
      fontWeight: 'bold',
      color: colors.apiTheme,
      fontSize: 18,
    },
  });
};

export default styles;
