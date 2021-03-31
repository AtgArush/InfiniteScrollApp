import React, { Component } from 'react'
import { Text, View, Dimensions, StyleSheet, SafeAreaView, Image, TouchableOpacity, ImageBackground } from 'react-native'
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
            image: imagePath.carouselOne,
            text: string.CAROUSEL_TEXT_ONE
        },
        {
            image: imagePath.carouselTwo,
            text: string.CAROUSEL_TEXT_TWO
        },
        {
            image: imagePath.carouselThree,
            text: string.CAROUSEL_TEXT_THREE
        },
        {
            image: imagePath.homePage,

        }
  ],
  theme: "",
  styles: {}
  }




  renderItem({item, index}){
    let {styles} = this.state
      if (index == 3) {
        return (
            <ImageBackground style = {styles.box} source = {imagePath.homePage}>
                {/* <Text>ABCD</Text> */}
                <View style = {styles.buttonContainer}>
                    <TouchableOpacity style = {styles.button}
                    onPress = {()=> this.props.navigation.navigate(navigationStrings.SIGNUP)}
                    >
                        <Text style = {styles.bottonButtonTextTwo}>{string.SIGNUP}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.button}
                    onPress = {()=> this.props.navigation.navigate(navigationStrings.LOGIN)}
                    >
                        <Text style = {styles.bottonButtonTextTwo}>{string.LOGIN}</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
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

changeTheme = () => {
  actions.changeTheme(this.state.theme)
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
  console.log(this.state.styles, this.state.theme, "current")
  console.log(this.props.state.theme, this.props.state.currentTheme, "updated")
  if (this.state.theme != this.props.state.currentTheme) {
    // alert(changeTheme)
  this.setState({styles: myStyles(this.props.state.theme), theme: this.props.state.currentTheme})
  }
}

render() {
    let {activeIndex, styles} = this.state
    let {navigation} = this.props
    // console.log(styles().outerContainer, "?//////////////")
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
                   {/* <TouchableOpacity style = {styles.bottomButton} 
                   onPress = {()=>this.changeTheme()}
                   >
                   <Text style = {styles.bottonButtonText}>{string.CHANGE_THEME}</Text>
               </TouchableOpacity>                        */}
               <Button 
               label = {string.CHANGE_THEME}
               onPress = {()=>this.changeTheme()}
               styleButton = {styles.bottomButton}
               styleText = {styles.bottonButtonText}
               />
               </>
                   ) : <></> }

        </View>
      </SafeAreaView>
    )
}
}

const mapStateToProps = ({theme}) => ({
  state: theme
})


export default connect(mapStateToProps)(LandingPage)