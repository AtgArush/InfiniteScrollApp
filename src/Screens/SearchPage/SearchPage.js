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

class SearchPage extends Component {
  state = {
    isLoading: false,
    theme: this.props.theme.currentTheme,
    styles: myStyles(this.props.theme.theme),
    profile: [],
    searchString: '',
    focus: false,
    searchPeople: false
  };

  componentDidUpdate() {
    if (this.state.theme != this.props.theme.currentTheme) {
      this.setState(
        {
          styles: myStyles(this.props.theme.theme),
          theme: this.props.theme.currentTheme,
          modalVisible: false,
        },
        () => {
          console.log(this.state.theme, 'home');
        },
      );
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
        console.log(res);
        this.setState({profile: res.data, isLoading: false});
      })
      .catch(error => {
        this.setState({isLoading: false});
        console.log(error);
      });
  };

  searchNearbyUsers = () => {
    // alert()
    locationPermission()
    .then((res)=>{
      if (res === "granted") {
        // alert("granted")
              Geolocation.getCurrentPosition(
          (position) => {
            let {longitude, latitude} = position.coords
            console.log(longitude, latitude);
            searchNearbyUser(longitude, latitude)
            .then((res)=>{
              console.log(res)
              this.setState({profile: res.data})
            })
          },
          (error) => {
            // See error code charts below.
            console.log(error.code, error.message);
          },
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
      }
      console.log(res)
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  render() {
    let {
      styles,
      profile,
      searchString,
      focus,
      isLoading,
      searchPeople
    } = this.state;
    let {theme} = this.props.theme;
    return (
      <View style={{flex: 1}}>
        <View style={styles.navbar}>
          <View
            style={styles.imageBox}
            onPress={() => this.setState({modalVisible: true})}>
            <Image
              source={imagePath.hamburgerIcon}
              style={styles.navbarLeftImage}
            />
          </View>
          <Text style={styles.navbarTopText}> {strings.SEARCH_USER} </Text>

          <TouchableOpacity style={{height:50, width: 50, position: "absolute", right: 20, justifyContent:"center", alignItems:"center"}}
          onPress={()=> this.setState({searchPeople: !searchPeople, profile: []})}
          >
            {/* <Text>ABCD</Text> */}
            {/* {this.renderImage()} */}
            {/* <Text>{searchPeople ? "Nearby users" : "search users"}</Text> */}
            {searchPeople ? 
            <Image style = {styles.toggleImage} source = {imagePath.location} /> : 
            <Image style = {styles.toggleImage} source = {imagePath.search} />
            }
          </TouchableOpacity>
        </View>

        <View style={styles.bodyContainer}>
          {searchPeople ? 
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
                        style={{
                          position: 'absolute',
                          right: 5,
                          top: 10,
                          paddingHorizontal: 25,
                          paddingVertical: 20,
                        }}>
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
            styleButton={{
              backgroundColor: theme.apiTheme,
              paddingHorizontal: 25,
              paddingVertical: 15,
              borderRadius: 5,
              marginVertical: 15
            }}
          />
           </View>

          }


          <FlatList
            data={profile}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item._id}
            renderItem={this.renderItem}
          />
        </View>
        {/* <Loader isLoading={isLoading} /> */}
      </View>
    );
  }
}

const mapStateToProps = ({theme}) => ({
  theme: theme,
});

export default connect(mapStateToProps)(SearchPage);
