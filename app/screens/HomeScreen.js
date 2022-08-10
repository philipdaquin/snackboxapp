import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import {useNavigation} from '@react-navigation/native'
import UserAddress from '../components/UserAddress'
import Categories from '../components/Categories'

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
      <View className="mt-6">
          <View className="justify-between items-baseline flex-row">
            <Text className="text-2xl font-medium relative bottom-1">Categories</Text>
            <Text className="text-sm font-medium text-red-400">Show All</Text>
        </View>
        <Categories />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen