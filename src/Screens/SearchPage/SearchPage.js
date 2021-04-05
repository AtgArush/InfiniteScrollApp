import React, {Component} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import imagePath from '../../constants/imagePath';
import myStyles from './styles';
import strings from '../../constants/lang/en';
import TextInputWithLabel from '../../Components/TextInputWithLabel';
import actions from '../../redux/actions';
import ConsultRow from '../../Components/ConsultRow';
import Loader from '../../Components/Loader';
import Button from '../../Components/Button';
import en from '../../constants/lang/en';
import Geolocation from 'react-native-geolocation-service';
import { locationPermission } from '../../utils/permissions';
import { searchNearbyUser } from '../../redux/actions/consult';
import Header from '../../Components/Header';

class SearchPage extends Component {
  state = {
    isLoading: false,
    theme: this.props.theme.currentTheme,
    styles: myStyles(this.props.theme.theme),
    profile: [],
    searchString: '',
    focus: false,
    searchByName: false
  };

  componentDidUpdate() {
    if (this.state.theme != this.props.theme.currentTheme) {
      this.setState({
          styles: myStyles(this.props.theme.theme),
          theme: this.props.theme.currentTheme,
          modalVisible: false,
        });
    }
  }

  renderItem = ({item, index}) => {
    return (
      <ConsultRow
        key={index}
        item={item}
        colors={this.props.theme.theme}
        theme={this.state.theme}
      />
    );
  };

  onChangeSearch = val => {
    this.setState({searchString: val});
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }
    this.searchTimeout = setTimeout(() => {
      this.searchUser();
    }, 2000);
  };

  searchUser = () => {
    let {searchString} = this.state;
    this.setState({isLoading: true});
    actions
      .searchUser(searchString)
      .then(res => {
        this.setState({profile: res.data, isLoading: false});
      })
      .catch(error => {
        this.setState({isLoading: false});
      });
  };

  searchNearbyUsers = () => {
    // alert()
    locationPermission()
    .then((res)=>{
      if (res === "granted") {
              Geolocation.getCurrentPosition(
          (position) => {
            let {longitude, latitude} = position.coords
            this.setState({isLoading: true})
            searchNearbyUser(longitude, latitude)
            .then((res)=>{
              this.setState({profile: res.data, isLoading: false})
            })
          },
          (error) => {
            console.log(error.code, error.message);
          },
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
      }
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  renderImage = () =>{
    let {searchByName, styles} = this.state
    if (searchByName) {
      return(
        <TouchableOpacity style={{height:50, width: 50, position: "absolute", right: 20, justifyContent:"center", alignItems:"center"}}
        onPress={()=> this.setState({searchByName: !searchByName, profile: []})}
        >
        <Image style = {styles.toggleImage} source = {imagePath.location} />       
        </TouchableOpacity>
      )
    }
    else{
      return(
        <TouchableOpacity style={{height:50, width: 50, position: "absolute", right: 20, justifyContent:"center", alignItems:"center"}}
        onPress={()=> this.setState({searchByName: !searchByName, profile: []})}
        >
        <Image style = {styles.toggleImage} source = {imagePath.search} />
        </TouchableOpacity>
      )
    }
  }
  toggleTheme = color => {
    // this.setState({})
    actions.changeTheme(color);
  };


  render() {
    let {
      styles,
      profile,
      searchString,
      focus,
      isLoading,
      searchByName
    } = this.state;
    let {theme} = this.props.theme;
    return (
      <View style={{flex: 1}}>
        {/* <View style={styles.navbar}>
          <View
            style={styles.imageBox}
            onPress={() => this.setState({modalVisible: true})}>
            <Image
              source={imagePath.hamburgerIcon}
              style={styles.navbarLeftImage}
            />
          </View>
          <Text style={styles.navbarTopText}> {strings.SEARCH_USER} </Text>
          {this.renderImage()}

        </View> */}
<Header
        styles = {styles}
        toggleTheme = {this.toggleTheme}
        theme = {theme}
        renderImage = {this.renderImage}
        title = "SEARCH USER"
        />
        <View style={styles.bodyContainer}>
          {searchByName ? 
                      <View style={styles.searchBox}>
                      <TextInputWithLabel
                        label={strings.SEARCH_USER}
                        value={searchString}
                        onFocus={() => this.setState({focus: true})}
                        onBlur={() => this.setState({focus: false})}
                        active={focus}
                        customTextStyle={styles.textInput}
                        placeholder={strings.PROFILE}
                        onChangeText={this.onChangeSearch}
                        themeColor={theme.apiTheme}
                        textStyle={{fontSize: 20, marginBottom: 0}}
                      />
                      <View
                        style={styles.loaderBox}>
                          {isLoading && 
                        <ActivityIndicator color={theme.apiTheme} size="large" />}
                      </View>
                    </View>
           : 
           <View style={styles.searchBox}
           >
<Button
onPress = {this.searchNearbyUsers}
            label={en.NEARBY_USERS}
            styleText={{fontWeight: 'bold', color: theme.themeCard}}
            styleButton={
              styles.nearbyUsersButton
            }
          />
                                <View
                        style={[styles.loaderBox]}
                        >
                          {isLoading && 
                        <ActivityIndicator color={theme.white} size="large" />}
                      </View>
           </View>

          }


          <FlatList
            data={profile}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item._id}
            renderItem={this.renderItem}
          />
        </View>
        {/* {!searchByName && <Loader isLoading = {isLoading} /> } */}
        {/* <Loader isLoading={isLoading} /> */}
      </View>
    );
  }
}

const mapStateToProps = ({theme}) => ({
  theme: theme,
});

export default connect(mapStateToProps)(SearchPage);
