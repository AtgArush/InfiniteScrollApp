import React, { Component } from 'react'
import { Text, View, Dimensions, StyleSheet, SafeAreaView, Image, TouchableOpacity, Modal } from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel';
import imagePath from '../../constants/imagePath';
import navigationStrings from '../../constants/navigationStrings';
import colors from '../../styles/colors';
import myStyles from "./styles"
import string from "../../constants/lang/en"
import { connect } from 'react-redux';
import actions from '../../redux/actions';
import Button from '../../Components/Button';
// import styles from './styles';
const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);

class LandingPage extends Component {
  state = {
    activeIndex:0,
    carouselItems: [
        {
            image: imagePath.matriOne,
            text: string.MATRI_ONE
        },
        {
            image: imagePath.matriTwo,
            text: string.MATRI_TWO
        },
        {
            image: imagePath.matriThree,
            text: string.MATRI_THREE
        },
        {
            image: imagePath.homePage,

        }
  ],
  theme: "",
  styles: {},
  modalVisible: false,
  themeColors: ['red', 'yellow', 'blue', 'green'],
  }




  renderItem({item, index}){
    let {styles} = this.state
      if (index == 3) {
        return (
            <View style = {styles.box} >
                <View style = {{flex: 0.4, justifyContent: "flex-end", alignItems: "center"}}>
                  {/* <Text>ABCD</Text> */}

                  <Text
              style={styles.navbarHeadOne}>
              TRU
              <Text
                style={styles.navbarHeadTwo}>
                EL
              </Text>
              OVE
            </Text>

                </View>
                   <View style = {styles.buttonContainer}>
                     <TouchableOpacity style = {styles.button}
                     onPress = {()=> this.props.navigation.navigate(navigationStrings.LOGIN)}
                     >
                         <Text style = {styles.bottonButtonTextTwo}>{string.SIGNUP}</Text>
                     </TouchableOpacity>
                     <TouchableOpacity style = {styles.button}
                     onPress = {()=> this.props.navigation.navigate(navigationStrings.LOGIN)}
                     >
                         <Text style = {styles.bottonButtonTextTwo}>{string.LOGIN}</Text>
                     </TouchableOpacity>
                 </View>
            </View>
        )}
    return (
      <View style={styles.carouselItem}>
                      <View
      style={styles.carouselItemImage}>
      <Image
        style={{
          width: '100%',
          height: '100%',
          resizeMode: 'contain',
        }}
        source={item.image}
      />
      <View style = {styles.carouselTextBox}>
        <Text
          style={styles.carouselText}>
          {item.text}
        </Text>
      </View>
    </View>
      </View>

    )
}


get pagination () {
    const { activeIndex, carouselItems } = this.state;
    return (
        <Pagination
          dotsLength={carouselItems.length}
          activeDotIndex={activeIndex}
          dotStyle={{
              width: 10,
              height: 10,
              borderRadius: 5,
              marginHorizontal: 8,
              backgroundColor: 'rgba(255, 255, 255, 0.92)'
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={1}
          
        />
    );
}

componentDidMount(){
  this.setState({styles: myStyles(this.props.state.theme,), theme: this.props.state.currentTheme})
}

componentDidUpdate(){
  if (this.state.theme != this.props.state.currentTheme) {
    // alert(changeTheme)
  this.setState({styles: myStyles(this.props.state.theme), theme: this.props.state.currentTheme})
  }
}

toggleTheme = color => {
  this.setState({modalVisible: false})
  actions.changeTheme(color);
};

render() {
    let {activeIndex, styles, modalVisible, themeColors} = this.state
    let {navigation} = this.props
    // let styles = pageStyles()
    return (
        <SafeAreaView style={styles.outerContainer}>
        <View style={{ flex: 1,justifyContent: 'center', }}>
            <Carousel
              layout={"default"}
              ref={ref => this.carousel = ref}
              data={this.state.carouselItems}
              sliderWidth={SLIDER_WIDTH}
              itemWidth={SLIDER_WIDTH}
              renderItem={this.renderItem.bind(this)}
              onSnapToItem = { index => this.setState({activeIndex:index}) } />
               { activeIndex != 3 ? (
                   <>
                   {this.pagination}
              <Button 
               label = {string.CHANGE_THEME}
               onPress = {() => this.setState({modalVisible: true})}
               styleButton = {styles.bottomButton}
               styleText = {styles.bottonButtonText}
               />
               </>
                   ) : <></> }

        </View>
        <Modal
            animationType="slide"
            visible={modalVisible}
            onRequestClose={() => {
              this.setState({modalVisible: false});
            }}>
            <View
              style={{
                backgroundColor: 'rgba(0,0,0,0.8)',
                height: '100%',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 25, fontWeight: 'bold', color: '#fff'}}>
                Choose your theme
              </Text>
              <View
                style={{
                  width: '70%',
                  height: '40%',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                }}>
                {themeColors.map((themeColor, key) => {
                  let {theme} = this.state
                  return (
                    <TouchableOpacity
                    key = {key}
                      style={{
                        width: '45%',
                        height: '40%',
                        backgroundColor: themeColor,
                        marginTop: '10%',
                        justifyContent: "center",
                        alignItems: "center"
                      }}
                      onPress={() =>
                        this.toggleTheme(themeColor)
                      }>
                        {theme == themeColor && <Image source = {imagePath.tickIcon} style = {{height: 50, width: 50}} />}
                      </TouchableOpacity>
                  );
                })}
              </View>
            </View>
          </Modal>
      </SafeAreaView>
    )
}
}

const mapStateToProps = ({theme}) => ({
  state: theme
})


export default connect(mapStateToProps)(LandingPage)