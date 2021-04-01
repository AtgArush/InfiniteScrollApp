import React, {Component} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import imagePath from '../../constants/imagePath';
import myStyles from './styles';
import strings from '../../constants/lang/en';
import TextInputWithLabel from '../../Components/TextInputWithLabel';
import actions from '../../redux/actions';
import ConsultRow from '../../Components/ConsultRow';
import Loader from '../../Components/Loader';

class SearchPage extends Component {
  state = {
    isLoading: false,
    theme: this.props.theme.currentTheme,
    styles: myStyles(this.props.theme.theme),
    profile: [],
    modalVisible: false,
    themeColors: ['red', 'yellow', 'blue', 'green'],
    searchString: '',
    focus: false,
    timeout: null,
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

  onChangeText = () => {
    return value => {
      let {timeout} = this.state;

      this.setState({searchString: value}, () => {
        if (this.state.searchString.length == 0) {
          clearTimeout(timeout);
          this.setState({profile: []});
        } else {
          clearTimeout(timeout);
          this.setState({
            timeout: setTimeout(() => {
              // console.log(this.state);
              this.searchUser();
            }, 3000),
          });
        }
      });
    };
  };

  onChangeSearch = val => {
    this.setState({searchString: val});
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }
    this.searchTimeout = setTimeout(() => {
      this.apicall();
    }, 600);
  };

  searchUser = () => {
    let {searchString} = this.state;
    this.setState({isLoading: true});
    // alert(searchString);
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

  render() {
    let {
      styles,
      profile,
      modalVisible,
      themeColors,
      searchString,
      focus,
      isLoading,
    } = this.state;
    let {theme} = this.props.theme;
    return (
      <View style={{flex: 1}}>
        <View style={styles.navbar}>
          <TouchableOpacity
            style={styles.imageBox}
            onPress={() => this.setState({modalVisible: true})}>
            <Image
              source={imagePath.hamburgerIcon}
              style={styles.navbarLeftImage}
            />
          </TouchableOpacity>
          <Text style={styles.navbarTopText}> {strings.SEARCH_USER} </Text>
        </View>

        <View style={styles.bodyContainer}>
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
            <TouchableOpacity
              style={{
                position: 'absolute',
                right: 5,
                top: 10,
                paddingHorizontal: 25,
                paddingVertical: 20,
              }}
              onPress={() => this.searchUser()}>
              <Image
                source={imagePath.search}
                style={{width: 45, height: 45}}
              />
            </TouchableOpacity>
          </View>

          <FlatList
            data={profile}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item._id}
            renderItem={this.renderItem}
          />
        </View>
        <Loader isLoading={isLoading} />
      </View>
    );
  }
}

const mapStateToProps = ({theme}) => ({
  theme: theme,
});

export default connect(mapStateToProps)(SearchPage);
