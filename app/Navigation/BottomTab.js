import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import {HomeIcon, SearchIcon, NewspaperIcon, UserIcon, TagIcon} from 'react-native-heroicons/outline'
import DealsScreen from '../screens/DealsScreen';
import OrderScreen from '../screens/OrderScreen';
import AccountScreen from '../screens/AccountScreen';
import SearchScreen from '../screens/SearchScreen';
const Tab = createBottomTabNavigator();


const BottomTab = () => {
  return (
    <Tab.Navigator 
    initialRouteNames= "Home"
    screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'black',
        tabBarIconStyle: {
            padding: 14,
            
        },
        tabBarLabelStyle: { 
            fontSize: 13,
            marginTop: 14,
            marginBottom: 18,
            fontWeight: 500
        },
        tabBarStyle: {
            backgroundColor: 'white',
            marginRight: 3,
            height: 84
        }
        
    }}>
      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarIcon: () => (<HomeIcon size={35} strokeWidth={1.5} color={"#000"} />   )
      }} />
      <Tab.Screen name="Search" component={SearchScreen} options={{
        tabBarIcon: () => (<SearchIcon size={35} strokeWidth={1.5} color={"#000"} />   )
      }} />
      <Tab.Screen name="Orders" component={OrderScreen} options={{
        tabBarIcon: () => (<NewspaperIcon size={35} strokeWidth={1.5} color={"#000"} />   )
      }} />
      <Tab.Screen name="Today" component={DealsScreen} options={{
        tabBarIcon: () => (<TagIcon size={35} strokeWidth={1.5} color={"#000"} />   )
      }} />
      
      <Tab.Screen name="Accounts" component={AccountScreen} options={{
        tabBarIcon: () => (<UserIcon size={35} strokeWidth={1.5} color={"#000"} />   )
      }} />
    </Tab.Navigator>
  )
}

export default BottomTab