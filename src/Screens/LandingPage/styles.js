import {StyleSheet} from 'react-native';
// import colors from '../../styles/colors';

const styles = (props) => {
  let colors = props
  console.log(colors, "colors")
  return StyleSheet.create({
      outerContainer:{flex: 1, backgroundColor:colors.themeColor},
      container: {
        flex: 1,
        backgroundColor: "red",
        justifyContent: 'flex-end',
      },
      innerContainer: {
        flex: 0.85,
        // backgroundColor: "blue",
        alignItems: 'center',
      },
      bottomButton: {
        marginHorizontal: 15,
        backgroundColor: colors.white,
        marginBottom: 55,
        width: '80%',
        paddingVertical: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        marginLeft: "10%"
      },
      bottonButtonText: {fontWeight: 'bold', color: colors.whiteBtnText, fontSize: 18},
      carouselItem: {
        backgroundColor:colors.themeColor,
        borderRadius: 5,
        flex: 0.85,
        },
        carouselItemImage: {
          borderRadius: 5,
          flex: 1,
          width: '100%',
          marginTop: 5,
          justifyContent: 'space-between',
        },
        carouselText: {
          color: 'white',
          width: '75%',
          fontSize: 25,
          textAlign: 'center',
          fontWeight: "bold"
        },
        carouselItemBox: {
          borderRadius: 5,
          flex: 1,
          width: '100%',
          marginTop: 5,
          justifyContent: 'space-between',
        },
        carouselTextBox: {height: "15%", justifyContent: "center", alignItems: "center" },
        box:{flex: 1},
        buttonContainer: {position: "absolute", bottom: "20%", flexDirection: "row", justifyContent:"space-around", width: "100%"},
        button :{paddingVertical: 16, backgroundColor: "white", width: "40%", borderRadius: 20, alignItems:"center"},
        bottonButtonTextTwo: {fontWeight: 'bold', color: colors.whiteBtnText, fontSize: 18},
      });
}

export default styles