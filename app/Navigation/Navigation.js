import { View, Text, Pressable } from 'react-native'
import React from 'react'
import HomeScreen from '../screens/HomeScreen';
import RestaurantProfile from '../screens/RestaurantProfile';
import FoodScreen from '../screens/FoodScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTab from './BottomTab';


const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{cardStyle: {backgroundColor: '#00000'}}}>
      {/* Homepage */}
      <Stack.Screen name ="Root" component={BottomTab} 
        options={{ presentation: "fullScreenModal", headerShown: false }}
      />
      {/* Restaurant Page */}

      
      <Stack.Screen name ="RestaurantStack" component={RestaurantProfile}
        options={{
          presentation: "fullScreenModal", headerShown: false
        }}
      />
      {/* Food Page */}
      <Stack.Screen name="FoodStack" component={FoodScreen}
        options={{
          presentation: "fullScreenModal", headerShown: false
        }}
      />


      
    </Stack.Navigator>
    
  )
}

export default Navigation