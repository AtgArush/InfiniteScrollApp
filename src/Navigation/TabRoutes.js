import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import navigationStrings from '../constants/navigationStrings';
import {Empty, Home, SearchPage} from '../Screens';
import colors from '../styles/colors';
import {connect} from 'react-redux';
import imagePath from '../constants/imagePath';
import { Image } from 'react-native';

const Tab = createBottomTabNavigator();

function TabRoutes(props) {
  let {apiTheme} = props.state.theme;
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          height: 70,
        },

        labelStyle: {
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: 10,
          borderRadius: 15,
          fontSize: 12,
        },
        indicatorStyle: {
          backgroundColor: '#f0f4f7',
          borderColor: 'rgb(189,189,189)',
          borderWidth: 10,
          borderBottomWidth: 0,
          borderRadius: 5,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
        },
        activeBackgroundColor: apiTheme,
        inactiveBackgroundColor: 'white',
        activeTintColor: '#fff',
        inactiveTintColor: '#777',
        
      }}>
      <Tab.Screen name={navigationStrings.HOME} component={Home}
      options = {{
        tabBarLabel:"HOME" ,
        tabBarIcon:({focused})=>(  
          <Image source = {imagePath.home} style = {[{height: 28, width: 28}, focused ? {tintColor: "#fff"} : {tintColor: apiTheme}]} />
        )
      }}
      />
      <Tab.Screen name={navigationStrings.SEARCH_PAGE} component={SearchPage} 
      options = {{
        tabBarLabel:"SEARCH" , 
        tabBarIcon:({focused})=>(  
          <Image source = {imagePath.search} style = {[{height: 34, width: 34}, focused ? {tintColor: "#fff"} : {tintColor: apiTheme}]} />
        )
      }}
      />
      <Tab.Screen name={navigationStrings.TAB_THREE} component={Empty} 
      options = {{
        tabBarLabel:"EMPTY" , 
        tabBarIcon:({focused})=>(  
          <Image source = {imagePath.location} style = {[{height: 28, width: 32}, focused ? {tintColor: "#fff"} : {tintColor: apiTheme}]} />
        )
      }}      />
    </Tab.Navigator>
  );
}

const mapStateToProps = ({theme}) => ({
  state: theme,
});

export default connect(mapStateToProps)(TabRoutes);
