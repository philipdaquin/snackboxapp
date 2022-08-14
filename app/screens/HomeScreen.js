import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import {useNavigation} from '@react-navigation/native'
import UserAddress from '../components/UserAddress'
import Categories from '../components/Categories'
import RecommendedFood from '../components/RecommendedFood'
import FeaturedRow from '../components/FeaturedRow'
import FeatureProducts from '../components/FeatureProducts'
import BasketIcon from '../components/BasketIcon'
import ConfirmationButton from '../components/ConfirmationButton'

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => { 
    navigation.setOptions({ 
      headerTitle: "This is the header",
      headerShown: false
    })
  })

  return (
    <>
    <BasketIcon />

    <ScrollView className="bg-white min-h-screen">
      <SafeAreaView className="px-4 pt-16">
          {/* User Address bar */}
          <View className="">
            <UserAddress />
            <Text className="font-medium text-[47px]">Good morning,<br/>John👋</Text>
            <Text className="text-left text-lg font-medium mt-6">Ready to make your first order today?</Text>
          </View>
          <View className="border-y border-gray-300/80 my-4 rounded"/>
          
          {/* Categories */}
          <View className="mt-5 space-y-10">
            <View>
              <View className="justify-between items-end flex-row">
                  <Text className="text-xl font-medium relative ">Categories</Text>
                  <Text className="text-sm font-medium text-red-400">Show All</Text>
              </View>
              <Categories />
            </View>
            
            <View>    
              <View className="justify-between items-end flex-row">
                  <Text className="text-xl font-medium relative">Recommended Around You</Text>
                  <Text className="text-sm font-medium text-red-400">Show All</Text>
              </View>
              <RecommendedFood />
            </View>

          {/* All Featured Items Go in Here */}
            <View>
              <FeatureProducts />
            </View>
          </View>
          {/* Recommended Around You */}

          <View className="flex justify-center items-center mt-16 mb-16">
            <Text className="text-sm text-gray-400 font-medium">That's it!</Text>
          </View>
      </SafeAreaView>
    </ScrollView>
    </>

  )
}

export default HomeScreen