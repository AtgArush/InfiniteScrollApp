import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Routes from './src/Navigation/Routes'
import actions from './src/redux/actions'
import store from "./src/redux/store"
import { getUserData } from './src/utils/utils'
import Loader from "./src/Components/Loader"
import { StatusBar } from 'react-native'
import SplashScreen from 'react-native-splash-screen'

export default class App extends Component {

  // componentDidMount(){
  //   getUserData()
  //   .then((res)=>{
  //     console.log(res, "App")
  //     actions.saveUserData(res)
  //   })
  // }

  componentDidMount()  {
    getUserData()
    .then((res)=> {
      actions.saveUserData(res);
      // setTimeout(() => {
        SplashScreen.hide();
      // }, 1000);
    })
    .catch((error)=>console.log(error))
  }

  render() {
    return (
      <Provider store = {store}>
        <Routes />
      </Provider>
    )
  }
}
