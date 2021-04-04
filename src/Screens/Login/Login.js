import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
  ScrollView,
} from 'react-native';
import TextInputWithLabel from '../../Components/TextInputWithLabel';
import navigationStrings from '../../constants/navigationStrings';
import colors from '../../styles/colors';
import styles from './styles';
import actions from '../../redux/actions';
import Loader from '../../Components/Loader';
import {showMessage} from 'react-native-flash-message';
import string from '../../constants/lang/en';
import Button from '../../Components/Button';
import { connect } from 'react-redux';
import myStyles from "./styles"
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      login: false,
      focus: false,
      loading: false,
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
    return value => {
      this.setState({username: value});
    };
  };

  loginClicked = () => {
    let loginDetail = this.state.username;
    if (loginDetail == '') {
      showMessage({
        message: 'You forgot to enter your phonenumber',
        type: 'danger',
      });
    } else if (loginDetail.length <= 5) {
      showMessage({
        message: 'Minimum length required > 5',
        type: 'danger',
      });
    } else {
      this.setState({loading: true});
      actions
        .Login({
          contactDetails: {
            phoneNo: this.state.username,
            countryCode: '+91',
            countryCodeISO: 'IN',
          },
        })
        .then(res => {
          this.setState({loading: false});
          // console.log(res)
          let userId = res.data.userId;
          this.props.navigation.navigate(navigationStrings.OTP, {
            userId: userId,
            name: 'Dummy Name',
          });
        })
        .catch(error => {
          console.log(error);
          this.setState({loading: false});
        });
    }
  };

  render() {
    let {navigation} = this.props;
    let {styles} = this.state
    let {theme} = this.props.theme
    return (
      <ScrollView style={{flex: 1}}>
        <View style={styles.topBar}>
          <View>
            <Text style={styles.heading}>
              <Text style={styles.headingTextOne}>
                {string.HEALT}
                <Text style={styles.headingTextTwo}>{string.HK}</Text>
                {string.ART}
              </Text>
            </Text>
          </View>
          <View style={styles.paddingLeft}>
            <Text style={styles.headerText}>{string.GOOD_MORNING}</Text>
            <Text style={[styles.headerText, {marginBottom: 70}]}>
              {string.LOGIN_GREET}
            </Text>
          </View>
        </View>

        <View style={styles.body}>
          <View style={styles.textBox}>
            <TextInputWithLabel
              label={string.LABEL_PHONE_NUMBER}
              value={this.state.username}
              onFocus={() => this.setState({focus: true})}
              onBlur={() => this.setState({focus: false})}
              active={this.state.focus}
              customTextStyle={styles.textInput}
              placeholder={string.PLACEHOLDER_PHONE}
              onChangeText={this.onChangeText()}
              themeColor = {theme.apiTheme}
              keyboardType="number-pad"
            />
          </View>
          <View style={styles.forgotButton}>
            <Text style={styles.forgotText}>{string.FORGOT}</Text>
          </View>
          <View style={styles.loginButton}>
            <Button
              onPress={() => this.loginClicked()}
              styleButton={{alignItems: 'center'}}
              styleText={styles.loginText}
              label={string.NEXT}
            />
          </View>
          <View style={styles.signUpButton}>
            <Text style={{marginBottom: 15}}>
              {string.LOGIN_TO_SIGNUP_TEXT}
            </Text>
            <Button
              styleButton={styles.signup}
              styleText={styles.signupText}
              label={string.CREATE_ACCOUNT}
            />
          </View>
        </View>
        <Loader isLoading={this.state.loading} />
      </ScrollView>
    );
  }
}

const mapStateToProps = ({theme}) => ({
  theme: theme
})

export default connect(mapStateToProps)(Login)