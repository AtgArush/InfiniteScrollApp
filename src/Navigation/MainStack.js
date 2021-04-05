import React from 'react'
import {createStackNavigator} from "@react-navigation/stack"
import navigationStrings from '../constants/navigationStrings'
import TabRoutes from "./TabRoutes"
import DrawerStack from './DrawerStack';
const Stack = createStackNavigator()

function MainStack() {
    return (
      <React.Fragment>
        {/* <Stack.Screen name={navigationStrings.TAB_ROUTES} component={TabRoutes} /> */}
        <Stack.Screen name={navigationStrings.DRAWER} component={DrawerStack} />
      </React.Fragment>
    );
}

export default MainStack
