import React, {Component} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  FlatList,
  ActivityIndicator,
  Modal,
} from 'react-native';
import imagePath from '../../constants/imagePath';
import colors from '../../styles/colors';
import myStyles from './styles';
import actions from '../../redux/actions';
import {connect} from 'react-redux';
import ConsultRow from '../../Components/ConsultRow';
import strings from '../../constants/lang/en';
import styles from '../Login/styles';
import navigationStrings from '../../constants/navigationStrings';
import Header from '../../Components/Header';
import Button from '../../Components/Button';

class Home extends Component {
  state = {
    isLoading: true,
    isRefreshing: false,
    theme: this.props.theme.currentTheme,
    styles: myStyles(this.props.theme.theme),
    isNoMoreData: false,
    profile: [],
    modalVisible: false,
    themeColors: ['red', 'yellow', 'blue', 'green'],
  };

  componentDidMount() {
    // alert()
    this.apiCall();
  }

  componentDidUpdate() {
    if (this.state.theme != this.props.theme.currentTheme) {
      this.setState(
        {
          styles: myStyles(this.props.theme.theme),
          theme: this.props.theme.currentTheme,
          modalVisible: false,
        },
        () => {
        },
      );
    }
  }

  apiCall = (endCall = false) => {
    let {profile} = this.state;
    let {cardList} = this.props.data;

    let skip = endCall ? profile.length : 0;

    actions
      .loadData({skip: skip})
      .then(res => {
        if (res.data.length > 0) {
          let profilesData = endCall ? [...profile, ...res.data] : res.data;
          this.setState(
            {
              profile: profilesData,
              isLoading: false,
              isRefreshing: false,
            }
          );
          // updatedStateVar = {
          // };
        } else {
          this.setState(
            {
              isNoMoreData: true,
              isLoading: false,
              isRefreshing: false,
            }
          );
        }
      })
      .catch(error => {
        // alert("Catch")
        this.setState({isLoading: false, isRefreshing: false});
      });
  };

  renderItem = ({item, index}) => {
    return (
      <ConsultRow
        id={index}
        item={item}
        colors={this.props.theme.theme}
        theme={this.state.theme}
      />
    );
  };

  LoadMoreItems = () => {
    let {isLoading, isNoMoreData} = this.state;
    if (isLoading || isNoMoreData) {
      return;
    }
    this.setState({isLoading: true});
    this.apiCall(true);
  };

  onRefresh = () => {
    this.setState({isRefreshing: true, isNoMoreData: false});
    this.apiCall();
  };

  renderFooter = () => {
    let {isLoading} = this.state;
    let {apiTheme} = this.props.theme.theme;
    if (isLoading) {
      return (
        <View style={{paddingBottom: 40}}>
          <ActivityIndicator color={apiTheme} size="large" />
        </View>
      );
    }
    return <View style={{height: 50}} />;
  };

  toggleTheme = color => {
    // this.setState({})
    actions.changeTheme(color);
  };

  renderImage = () => {
    let {styles} = this.state;
    switch (this.state.theme) {
      case 'red':
        return (
          <TouchableOpacity onPress={() => actions.logout()}>
            <Image
              source={imagePath.logRed}
              onPress={() => actions.logout()}
              style={styles.crossImage}
            />
          </TouchableOpacity>
        );
      case 'blue':
        return (
          <TouchableOpacity onPress={() => actions.logout()}>
            <Image
              source={imagePath.logBlue}
              onPress={() => actions.logout()}
              style={styles.crossImage}
            />
          </TouchableOpacity>
        );

      case 'yellow':
        return (
          <TouchableOpacity onPress={() => actions.logout()}>
            <Image
              source={imagePath.logYellow}
              onPress={() => actions.logout()}
              style={styles.crossImage}
            />
          </TouchableOpacity>
        );
      case 'green':
        return (
          <TouchableOpacity onPress={() => actions.logout()}>
            <Image
              source={imagePath.logGreen}
              onPress={() => actions.logout()}
              style={styles.crossImage}
            />
          </TouchableOpacity>
        );

      default:
        break;
    }
  };

  render() {
    let {navigation} = this.props;
    let {
      styles,
      profile,
      modalVisible,
      themeColors,
      theme
    } = this.state;
    return (
      <View style={{flex: 1}}>
              <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          setmodalVisible(true);
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
            {strings.THEME}
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
              // let {theme} = this.state;
              return (
                <TouchableOpacity
                  style={{
                    width: '45%',
                    height: '40%',
                    backgroundColor: themeColor,
                    marginTop: '10%',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  key={key}
                  onPress={() => this.toggleTheme(themeColor)}>
                  {theme == themeColor && (
                    <Image
                      source={imagePath.tickIcon}
                      style={{height: 50, width: 50}}
                    />
                  )}
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </Modal>
        <Header 
        styles = {styles}
        toggleTheme = {this.toggleTheme}
        theme = {theme}
        renderImage = {this.renderImage}
        title = "CONSULT"
        />
        <View style={[styles.bodyContainer, {paddingTop: 15}]}>
          {/* <Button /> */}
          <Button 
               label = {strings.CHANGE_THEME}
               onPress = {() => this.setState({modalVisible: true})}
               styleButton = {styles.bottomButton}
               styleText = {styles.bottonButtonText}
               />
          <FlatList
            data={profile}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item._id}
            onEndReached={this.LoadMoreItems}
            onEndReachedThreshold={0}
            renderItem={this.renderItem}
            onRefresh={() => this.onRefresh()}
            bounces={false}
            refreshing={this.state.isRefreshing}
            ListFooterComponent={this.renderFooter}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({consult, theme}) => ({
  data: consult,
  theme: theme,
});
export default connect(mapStateToProps)(Home);
