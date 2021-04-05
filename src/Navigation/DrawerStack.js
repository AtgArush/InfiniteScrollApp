import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import navigationStrings from '../constants/navigationStrings';
import TabRoutes from './TabRoutes';
import {Charts, Home, Notification} from '../Screens';
import {Text} from 'react-native';
import DrawerComponent from '../Components/DrawerComponent';
const Drawer = createDrawerNavigator();

function DrawerStack() {
  return (
    <Drawer.Navigator
      initialRouteName={navigationStrings.TAB_ROUTES}
      drawerContent={props => <DrawerComponent props={props} />}>
      <Drawer.Screen name={navigationStrings.HOME} component={TabRoutes} />
      <Drawer.Screen
        name={navigationStrings.NOTIFICATION}
        component={Notification}
      />
      <Drawer.Screen name={navigationStrings.CHART} component={Charts} />
    </Drawer.Navigator>
  );
}

export default DrawerStack;
