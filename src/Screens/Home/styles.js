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
    themeToggleBox: {
      position: 'absolute',
      top: 20,
      right: 10,
    },
    themeToggle: {
      height: 30,
      width: 50,
      marginLeft: 10,
    },
    crossImage: {
      height: 50,
      width: 50,
      marginLeft: 10,
    },
    emptyShopButton: {
      paddingVertical: 15,
      backgroundColor: colors.themeColor,
      marginBottom: 15,
      borderRadius: 10,
      marginHorizontal: 50,
    },
    navbarIconContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 15,
    },
    navbarIcon: {
      width: 40,
      height: 40,
    },
    navbarTopText: {
      fontSize: 20,
      fontWeight: 'bold',
      //   marginTop: 5,
      marginLeft: 10,
      color: colors.barText
    },
    navbarTextTwo: {
      fontSize: 16,
      fontWeight: 'normal',
    },
    textRow: {
      display: 'flex',
      flexDirection: 'row',
      paddingHorizontal: '10%',
      justifyContent: 'space-between',
      marginTop: 10,
    },
    textRowText: {
      color: '#a4a4a4',
      fontWeight: 'bold',
    },
    couponRow: {
      backgroundColor: 'white',
      paddingHorizontal: 10,
      justifyContent: 'space-between',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      height: 55,
      marginTop: 20,
    },
    couponLeft: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    couponImage: {
      width: 35,
      height: 35,
    },
    couponRightText: {
      fontWeight: 'bold',
      color: '#3089b1',
    },
    orderDetailSection: {
      marginTop: 10,
      backgroundColor: 'white',
      padding: 10,
      paddingHorizontal: 20,
    },
    orderHeading: {
      fontWeight: 'bold',
      fontSize: 20,
      color: '#444',
      paddingVertical: 10,
    },
    orderDetailRow: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 3,
    },
    total: {
      fontWeight: 'bold',
      fontSize: 16,
    },
    checkOutDiv: {
      height: 60,
      backgroundColor: '#f0f4f7',
      justifyContent: 'space-around',
      flexDirection: 'row',
      alignItems: 'center',
    },
    shareButton: {
      flex: 0.3,
      height: 40,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
    },
    shareText: {fontWeight: 'bold'},
    orderButton: {
      flex: 0.5,
      height: 40,
      backgroundColor: 'black',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
    },
    orderText: {color: 'white', fontWeight: 'bold'},
    container: {
      flex: 1,
      backgroundColor: '#f0f4f7',
    },
    containerEmptyNav: {
      height: 60,
      paddingHorizontal: 20,
      justifyContent: 'space-between',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    hamburgerIcon: {
      resizeMode: 'contain',
      height: 30,
      width: 30,
    },
    navHeading: {
      alignSelf: 'center',
      fontSize: 20,
      fontWeight: 'bold',
    },
    navIcon: {
      resizeMode: 'contain',
      height: 30,
      width: 30,
      marginHorizontal: 5,
      marginVertical: 0,
    },
    bodyContainer: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: colors.themeTwo,
    },
    imageContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    centerImage: {
      width: 100,
      height: 100,
      marginBottom: 10,
    },
    emptyPageTextBox: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    emptyPageTextTwo: {
      marginTop: 10,
      fontSize: 14,
      marginBottom: 18,
    },
    emptyPageTextOne: {
      marginTop: 10,
      fontSize: 20,
      fontWeight: 'bold',
    },
  });
};

export default styles;
