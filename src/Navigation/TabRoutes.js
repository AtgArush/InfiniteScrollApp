import React from 'react'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import navigationStrings from '../constants/navigationStrings'
import { Empty, Home } from '../Screens'
import colors from '../styles/colors'
import { connect } from 'react-redux'

const Tab = createBottomTabNavigator()

function TabRoutes(props) {

  let {apiTheme} = props.state.theme
    return (
        <Tab.Navigator
        tabBarOptions={{
            style: {
              height: 50
            },
              pressColor: 'gray',
              activeTintColor:"#fff",
            inactiveTintColor:"#777",
            activeBackgroundColor:'white',
            inactiveBackgroundColor:'white',
            labelStyle:{
              fontWeight: "bold",
              textAlign:'center',
              marginBottom: 10,
              borderRadius: 15,
              fontSize: 12
            },
            indicatorStyle: {
              backgroundColor: "#f0f4f7",
              borderColor: 'rgb(189,189,189)',
              borderWidth: 10,
              borderBottomWidth: 0,
              borderRadius: 5,
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
            },
            activeBackgroundColor: apiTheme, 
            inactiveBackgroundColor: "white"
            }}
        >
            <Tab.Screen name={navigationStrings.HOME} component={Home} />
            <Tab.Screen name={navigationStrings.TAB_TWO} component={Empty} />
            <Tab.Screen name={navigationStrings.TAB_THREE} component={Empty} />
        </Tab.Navigator>
    )
}

const mapStateToProps = ({theme}) => ({
  state: theme
})

export default connect(mapStateToProps)(TabRoutes)