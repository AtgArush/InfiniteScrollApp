// import {StyleSheet} from 'react-native';
// import colors from '../../styles/colors';

// export default StyleSheet.create({
//   topBar: {
//     height: 350,
//     backgroundColor: colors.apiTheme,
//     justifyContent: 'space-between',
//     borderBottomRightRadius: 80,
//   },
//   heading: {
//     marginTop: 70,
//     color: colors.white,
//     fontSize: 55,
//     fontWeight: 'bold',
//     alignSelf: 'center',
//   },
//   headingTextOne: {
//     paddingVertical: 20,
//     fontSize: 42,
//     color: colors.white,
//   },
//   headingTextTwo: {
//     paddingVertical: 10,
//     backgroundColor: colors.white,
//     fontSize: 45,
//     color: colors.apiTheme,
//   },
//   headerText: {
//     color: '#eee',
//     fontSize: 30,
//     fontWeight: 'bold',
//   },
//   body: {height: 580},
//   textBox: {paddingHorizontal: 20, marginTop: 25},
//   textInput: {
//     borderWidth: 0,
//     borderBottomWidth: 1,
//     borderBottomColor: colors.apiTheme,
//     color: colors.apiTheme,
//   },
//   forgotButton: {
//     display: 'flex',
//     justifyContent: 'flex-end',
//     flexDirection: 'row',
//     marginTop: 25,
//     marginRight: 25,
//   },
//   forgotText: {
//     color: colors.apiTheme,
//     fontSize: 18,
//   },
//   loginButton: {
//     backgroundColor: colors.apiTheme,
//     marginTop: 30,
//     marginHorizontal: 30,
//     paddingVertical: 16,
//     borderRadius: 10,
//   },
//   loginText: {
//     color: 'white',
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   signUpButton: {
//     alignItems: 'center',
//     marginTop: 120,
//   },
//   signup: {
//     marginHorizontal: 100,
//     backgroundColor: 'black',
//     borderRadius: 10,
//   },
//   signupText: {
//     fontWeight: 'bold',
//     color: 'white',
//     paddingHorizontal: 50,
//     paddingVertical: 15,
//   },
//   horizontalLines: {
//     flex: 0.44,
//     height: 2,
//     backgroundColor: '#555',
//   },
//   orSection: {
//     display: 'flex',
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   forgotText: {
//     color: colors.apiTheme,
//     fontSize: 20,
//   },
//   paddingLeft: {
//     paddingLeft: 15,
//   },
// });


import {StyleSheet} from 'react-native';
// import colors from '../../styles/colors';

const styles = (props) => {
  let colors = props
  console.log(colors, "colors")
  return StyleSheet.create({
  topBar: {
    height: 350,
    backgroundColor: colors.apiTheme,
    justifyContent: 'space-between',
    borderBottomRightRadius: 80,
  },
  heading: {
    marginTop: 70,
    color: colors.white,
    fontSize: 55,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  headingTextOne: {
    paddingVertical: 20,
    fontSize: 42,
    color: colors.white,
  },
  headingTextTwo: {
    paddingVertical: 10,
    backgroundColor: colors.white,
    fontSize: 45,
    color: colors.apiTheme,
  },
  headerText: {
    color: '#eee',
    fontSize: 30,
    fontWeight: 'bold',
  },
  body: {height: 580},
  textBox: {paddingHorizontal: 20, marginTop: 25},
  textInput: {
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: colors.apiTheme,
    color: colors.apiTheme,
  },
  forgotButton: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    marginTop: 25,
    marginRight: 25,
  },
  forgotText: {
    color: colors.apiTheme,
    fontSize: 18,
  },
  loginButton: {
    backgroundColor: colors.apiTheme,
    marginTop: 30,
    marginHorizontal: 30,
    paddingVertical: 16,
    borderRadius: 10,
  },
  loginText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  signUpButton: {
    alignItems: 'center',
    marginTop: 120,
  },
  signup: {
    marginHorizontal: 100,
    backgroundColor: 'black',
    borderRadius: 10,
  },
  signupText: {
    fontWeight: 'bold',
    color: 'white',
    paddingHorizontal: 50,
    paddingVertical: 15,
  },
  horizontalLines: {
    flex: 0.44,
    height: 2,
    backgroundColor: '#555',
  },
  orSection: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  forgotText: {
    color: colors.apiTheme,
    fontSize: 20,
  },
  paddingLeft: {
    paddingLeft: 15,
  },
  });
}

export default styles