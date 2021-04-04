import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import actions from '../../redux/actions';
import Loader from '../../Components/Loader';
import navigationStrings from '../../constants/navigationStrings';
import colors from '../../styles/colors';
import TextInputWithLabel from '../../Components/TextInputWithLabel';
import styles from "./styles"
import string from "../../constants/lang/en"
import { getUserData } from '../../utils/utils';
import Button from '../../Components/Button';
import { connect } from 'react-redux';
import myStyles from "./styles"
class Otp extends Component {

    constructor(props) {
        super(props);
        this.state = {
          password: '',
          login: false,
          isLoading: false,
          focus: false,
          theme: "",
          styles: {},
        };
      }
    
      componentDidMount(){
        console.log(this.props.theme)
        this.setState({styles: myStyles(this.props.theme.theme), theme: this.props.theme.currentTheme})
      }
      
      componentDidUpdate(){
        // console.log(this.state.styles, this.state.theme, "current")
        // console.log(this.props.theme.theme, this.props.theme.currentTheme, "updated")
        if (this.state.theme != this.props.theme.currentTheme) {
          // alert(changeTheme)
        this.setState({styles: myStyles(this.props.theme.theme), theme: this.props.theme.currentTheme})
        }
      }

      onChangeText = () => {
        return (value) => {
          this.setState({password: value}, ()=>{
            // console.log(this.state)
          })
        }
      }
    
      loginClicked = () => {
        let loginDetail = this.state.password;
        if (loginDetail == '') {
          alert('You forgot to enter your password');
        } else {
            // console.log(this.props)
          this.setState({isLoading: true});
        actions.verifyOtp({"userId": this.props.route.params.userId,
        "otp" : this.state.password,
        "deviceToken":"123",
        "registerFrom" : "ANDROID"
    })
    .then((res)=>{
      this.setState({isLoading: false})
      console.log(res)
      getUserData()
      .then((res)=>{
        console.log(res, "////OTP///")
      })
              // this.props.navigation.navigate(navigationStrings.TAB_ROUTES)
      })
    .catch((error)=>{
        this.setState({isLoading: false})
        console.log(error)
    })
        }
      };
    
      render() {
        let username = this.props.route.params.name;
        let {isLoading, styles} = this.state;
    let {theme} = this.props.theme

        console.log(this.props)
          return (
            <View style={{flex: 1}}>
            <View style={styles.topBar}>
              <View>
              <Text style={styles.heading}>
                <Text
                  style={styles.headingTextOne}>
                  {string.HEALT}
                  <Text
                    style={styles.headingTextTwo}>
                    {string.HK}
                  </Text>
                  {string.ART}
                </Text>
              </Text>
              </View>
              <View style={styles.paddingLeft}>
                <Text style={styles.headerText}>{string.HI} {username}</Text>
                <Text style={[styles.headerText, {marginBottom: 70}]}>
                  {string.WELCOME_BACK}
                </Text>
              </View>
            </View>
            <View style={{height: 580}}>
              <View style = {styles.textBox}>
              {/* <TextInputWithLabel
                label={string.OTP_LABEL}
                value={this.state.password}
                onFocus={() => this.setState({focus: true})}
                onBlur={() => this.setState({focus: false})}
                active={this.state.focus}
                customTextStyle = {styles.textInput}
                placeholder = {string.OTP_PLACEHOLDER}
                onChangeText = {this.onChangeText()}
                secureTextEntry = {true}
              themeColor = {theme.apiTheme}
              keyboardType="number-pad"
              /> */}
  <TextInputWithLabel
              label={string.OTP_LABEL}
              value={this.state.password}
              onFocus={() => this.setState({focus: true})}
              onBlur={() => this.setState({focus: false})}
              active={this.state.focus}
              customTextStyle={styles.textInput}
              placeholder={string.OTP_PLACEHOLDER}
              onChangeText={this.onChangeText()}
              themeColor = {theme.apiTheme}
              keyboardType="number-pad"
              secureTextEntry = {true}
            />
              </View>
              <View style={styles.forgotButton}>
                <Text style={styles.forgotText}>{string.FORGOT_PASSWORD}</Text>
              </View>
              <View style={styles.login}>
              <View style={styles.loginButton}>
              {/* <TouchableOpacity
                style={{alignItems: 'center'}}
                onPress={() => this.loginClicked()}>
                <Text style={styles.loginText}>{string.LOGIN_CAPS}</Text>
              </TouchableOpacity> */}
              <Button
              label = {string.LOGIN_CAPS}
              onPress = {() => this.loginClicked()}
              styleButton = {{alignItems: 'center'}}
              styleText = {styles.loginText}
              />
            </View>
              </View>
              <View style={{alignItems: 'center', marginTop: 30}}>
                <View style={styles.orSection}>
                  <View style={styles.horizontalLines}></View>
                  <Text style={{marginHorizontal: 25}}>{string.OR}</Text>
                  <View style={styles.horizontalLines}></View>
                </View>
              </View>
              <View style={styles.loginButton}>
              {/* <TouchableOpacity
                style={{alignItems: 'center'}}
                onPress={() => this.loginClicked()}>
                <Text style={styles.loginText}> {string.USE_PASSWORD} </Text>
              </TouchableOpacity> */}
              <Button 
              label = {string.USE_PASSWORD}
              styleButton={{alignItems: "center"}}
              styleText = {styles.loginText}
              />
            </View>
            </View>
            <Loader isLoading={isLoading} />
          </View>
          );
        }
}


const mapStateToProps = ({theme}) => ({
  theme: theme
})

export default connect(mapStateToProps)(Otp)