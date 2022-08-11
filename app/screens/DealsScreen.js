import { View, Text, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import DealCard from '../components/DealCard'
import DealPopularPlaces from '../components/DealPopularPlaces'

const DealsScreen = () => {
  return (
    <ScrollView className="bg-white min-h-screen">
      <SafeAreaView className="pt-16 px-4 mb-7">
        <View>
          <Text className="text-sm font-medium text-gray-500">Saturday, 6 August</Text>
          <Text className="text-[44px] font-medium text-left">Today</Text>
        </View>

        <View className="">
          <DealCard />
        </View>
        <View className="mt-7">
          <DealPopularPlaces />
        </View>

        <View className="mt-7">
          <DealCard />
        </View>
      </SafeAreaView> 
      <View className=" flex flex-col-reverse justify-center items-center mt-32">
          <Text className="text-sm text-gray-400 font-medium">That's it!</Text>
      </View>
    </ScrollView>
  )
}

export default DealsScreen