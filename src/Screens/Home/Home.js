import React, {Component} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import imagePath from '../../constants/imagePath';
import colors from '../../styles/colors';
import myStyles from './styles';
import actions from '../../redux/actions';
import {connect} from 'react-redux';
import ConsultRow from '../../Components/ConsultRow';
import strings from '../../constants/lang/en';

class Home extends Component {
  state = {
    isLoading: true,
    isRefreshing: false,
    theme: this.props.state.currentTheme,
    styles: myStyles(this.props.state.theme),
    isNoMoreData: false,
    profile: []
  };

  componentDidMount() {
    // alert()
    console.log(this.state)
    this.apiCall()
  }

  componentDidUpdate() {
    if (this.state.theme != this.props.state.currentTheme) {
      this.setState({
        styles: myStyles(this.props.state.theme),
        theme: this.props.state.currentTheme,
      });
    }
  }

  apiCall = (endCall = false) => {

    let {profile} = this.state
    let {cardList} = this.props.data;

    let skip = endCall ? cardList.length : 0;
    
    actions
    .loadData({skip: skip})
    .then(res => {
      if (res.data.length > 0) {
        let profilesData = endCall
          ? [...profile, ...res.data]
          : res.data;
          this.setState({
            profile: profilesData,
            isLoading: false,
            isRefreshing: false,
          },()=>{
            console.log(this.state)
          });
        // updatedStateVar = {
        // };
      } else {
        this.setState({
          isNoMoreData: true,
          isLoading: false,
          isRefreshing: false,
        },()=>{
          console.log(this.state)
        });
      }
    })
    .catch(error => {
      // alert("Catch")
      this.setState({isLoading: false, isRefreshing: false});
    });
  };

  renderItem = ({item,index}) => {
    return (
      <ConsultRow
        key={index}
        item={item}
        colors={this.props.state.theme}
        theme={this.state.theme}
      />
    );
  };

  LoadMoreItems = () => {
    let {isLoading, isNoMoreData } = this.state
    if (isLoading || isNoMoreData) {
      return
    }
    this.setState({isLoading: true});
    this.apiCall(true)
  };

  onRefresh = () => {
    this.setState({isRefreshing: true, isNoMoreData: false});
    this.apiCall()
    // actions.fetchData().then(res => {
    //   this.setState({isRefreshing: false});
    // });
  };

  toggleTheme = () => {
    actions.changeTheme(this.state.theme);
  };

  render() {
    // let {cardList} = this.props.data;
    let {isLoading, styles, theme, profile} = this.state;
    return (
      <View style={{flex: 1}}>
        <View style={styles.navbar}>
          <TouchableOpacity
            onPress={() => actions.logout()}
            style={styles.imageBox}>
            <Image
              source={theme == 'light' ? imagePath.cross : imagePath.crossTwo}
              style={styles.crossImage}
            />
          </TouchableOpacity>
          <Text style={styles.navbarTopText}> {strings.CONSULT} </Text>

          <TouchableOpacity
            onPress={() => this.toggleTheme()}
            style={styles.themeToggleBox}>
            <Image
              source={theme == 'light' ? imagePath.light : imagePath.dark}
              style={styles.themeToggle}
            />
          </TouchableOpacity>
        </View>

        <View style={[styles.bodyContainer, {paddingTop: 15}]}>
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
          />
          {/* <Loader isLoading={this.state.isLoading} /> */}
          {isLoading && (
            <View
              style={{
                height: 80,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: colors.white,
              }}>
              <ActivityIndicator color={colors.themeColor} size="large" />
            </View>
          )}
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({consult, theme}) => ({
  data: consult,
  state: theme,
});
export default connect(mapStateToProps)(Home);
