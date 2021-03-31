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
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      login: false,
      focus: false,
      loading: false,
    };
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
            />
          </View>
          <View style={styles.forgotButton}>
            <Text style={styles.forgotText}>{string.FORGOT}</Text>
          </View>
          <View style={styles.loginButton}>
            {/* <TouchableOpacity
              style={{alignItems: 'center'}}
              onPress={() => this.loginClicked()}>
              <Text style={styles.loginText}>{string.NEXT}</Text>
            </TouchableOpacity> */}
            <Button
              onPress={() => this.loginClicked()}
              styleButton={{alignItems: "center"}}
              styleText={styles.loginText}
              label = {string.NEXT}
            />
          </View>
          <View style={styles.signUpButton}>
            <Text style={{marginBottom: 15}}>
              {string.LOGIN_TO_SIGNUP_TEXT}
            </Text>
            {/* <TouchableOpacity
                style={styles.signup}
                onPress={() => navigation.navigate(navigationStrings.SIGNUP)}>
                <Text style={styles.signupText}>{string.CREATE_ACCOUNT}</Text>
              </TouchableOpacity> */}
            <Button
              onPress={() => navigation.navigate(navigationStrings.SIGNUP)}
              styleButton={styles.signup}
              styleText={styles.signupText}
              label = {string.CREATE_ACCOUNT}
            />
          </View>
        </View>
        <Loader isLoading={this.state.loading} />
      </ScrollView>
    );
  }
}
