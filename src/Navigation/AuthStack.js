import React from 'react'
import {createStackNavigator} from "@react-navigation/stack"
import navigationStrings from '../constants/navigationStrings'
import { LandingPage, Login, Otp } from '../Screens'

const Stack = createStackNavigator()

function AuthStack() {
    return (
        <React.Fragment>
            <Stack.Screen name={navigationStrings.LANDING_PAGE} component={LandingPage} />
            <Stack.Screen name={navigationStrings.LOGIN} component={Login} />
            <Stack.Screen name={navigationStrings.OTP} component={Otp} />
            
        </React.Fragment>
    )
}

export default AuthStack
