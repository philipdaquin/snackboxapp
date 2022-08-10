import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import {useNavigation} from '@react-navigation/native'
import UserAddress from '../components/UserAddress'
import Categories from '../components/Categories'
import RecommendedFood from '../components/RecommendedFood'

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => { 
    navigation.setOptions({ 
      headerTitle: "This is the header",
      headerShown: false
    })
  })

  return (

    <SafeAreaView className="bg-white px-4 pt-16">
      {/* User Address bar */}
      <View className="">
        <UserAddress />
        <Text className="font-medium text-[47px]">Good morning,<br/>John👋</Text>
        <Text className="text-left text-lg font-medium mt-6">Ready to make your first order today?</Text>
      </View>
      <View className="border-y border-gray-300/80 my-4 rounded"/>
      
      {/* Categories */}
      <View className="mt-6 space-y-10">
        <View>
          <View className="justify-between items-end flex-row">
              <Text className="text-2xl font-medium relative ">Categories</Text>
              <Text className="text-sm font-medium text-red-400">Show All</Text>
          </View>
          <Categories />
        </View>
        
        <View>    
          <View className="justify-between items-end flex-row">
              <Text className="text-2xl font-medium relative">Recommended Around You</Text>
              <Text className="text-sm font-medium text-red-400">Show All</Text>
          </View>
          <RecommendedFood />
        </View>

      </View>
      {/* Recommended Around You */}
    </SafeAreaView>
  )
}

export default HomeScreen