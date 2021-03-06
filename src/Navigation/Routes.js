import React, { Component } from 'react'
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import { connect } from 'react-redux'
import AuthStack from './AuthStack'
import MainStack from './MainStack'

const Stack = createStackNavigator()

const Routes = props => {

    let userData = props.auth.userData;
        return (
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}>
              {!!userData ? MainStack() : AuthStack()}
            </Stack.Navigator>
          </NavigationContainer>
        );
    }

const mapStateToProps = ({auth}) => ({
  auth: auth,
});

export default connect(mapStateToProps)(Routes)