import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import {HomeIcon, SearchIcon, NewspaperIcon, UserIcon, TagIcon} from 'react-native-heroicons/outline'
// import {HomeIcon, SearchIcon, NewspaperIcon, UserIcon, TagIcon} from 'react-native-heroicons/solid'
import DealsScreen from '../screens/DealsScreen';
import OrderScreen from '../screens/OrderScreen';
import AccountScreen from '../screens/AccountScreen';
import SearchScreen from '../screens/SearchScreen';

import {
  HomeIcon as HomeFocus, 
  SearchIcon as SearchFocus, 
  NewspaperIcon as NewspaperFocus, 
  UserIcon as UserFocus, 
  TagIcon as TagFocus
} from 'react-native-heroicons/solid'


const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator 
    initialRouteName= 'Home'
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
            height: 84,
            shadowColor: "black",
            shadowOpacity: 90,
            shadowOffset: {
              width: 0,
              height: 20,
              
            },
          elevation: 24,
          shadowRadius: 42,
          setOffset: -8
          
        }
        
    }}>
      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarIcon: ({focused}) => (
            focused ? (
              <HomeFocus size={35} strokeWidth={1.5} color={"#000"} />

            ) : (
              <HomeIcon size={35} strokeWidth={1.5} color={"#000"} />
            ) 
          )
      }} /> 
      <Tab.Screen name="Search" component={SearchScreen} options={{
        tabBarIcon: ({focused}) => (
            focused ? (
              <SearchFocus size={35} strokeWidth={1.5} color={"#000"} />
            ) : (
              <SearchIcon size={35} strokeWidth={1.5} color={"#000"} />

            )
          )
      }} />
      <Tab.Screen name="Orders" component={OrderScreen} options={{
        tabBarIcon: ({focused}) => (
          focused ? (
            <NewspaperFocus size={35} strokeWidth={1.5} color={"#000"} />   
          ) : (
            <NewspaperIcon size={35} strokeWidth={1.5} color={"#000"} />   
          )
        )
      }} />
      <Tab.Screen name="Today" component={DealsScreen} options={{
        tabBarIcon: ({focused}) => (
            focused ? (
              <TagFocus size={35} strokeWidth={1.5} color={"#000"} />   
            ): (
              <TagIcon size={35} strokeWidth={1.5} color={"#000"} />   
            ) 
          )
      }} />
      
      <Tab.Screen name="Accounts" component={AccountScreen} options={{
        tabBarIcon: ({focused}) => (
            focused ? (
              <UserFocus size={35} strokeWidth={1.5} color={"#000"} />   
            ): ( 
              <UserIcon size={35} strokeWidth={1.5} color={"#000"} />   
            )
          )
      }} />
    </Tab.Navigator>
  )
}

export default BottomTab