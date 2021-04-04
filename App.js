import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Routes from './src/Navigation/Routes'
import actions from './src/redux/actions'
import store from "./src/redux/store"
import {getUserData} from './src/utils/utils';
import SplashScreen from 'react-native-splash-screen'
import {requestUserPermission} from './src/utils/permissions';

export default class App extends Component {
  componentDidMount() {
    getUserData()
      .then(res => {
        actions.saveUserData(res);
        SplashScreen.hide();
        requestUserPermission();
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}
