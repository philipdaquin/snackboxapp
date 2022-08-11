import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import DealProductInfo from './DealProductInfo'
import SuggestedCard from './SuggestedCard'
import PopularPlaceCard from './PopularPlaceCard'

const DealPopularPlaces = () => {
  return (
    <TouchableOpacity className="mt-3  
    w-[394] bg-white rounded-3xl px-4 py-6
    shadow-2xl drop-shadow">
      <View>
        <Text className="text-gray-500 font-normal text-left ">Now Trending</Text>
        <Text className="font-bold text-left text-lg">Popular Places To Ear Right Now</Text>
      </View>
      <View className="mt-2">
        <PopularPlaceCard title={"Restaurant"} restaurant_name={"Restaurant NAme"} price={2.0} />
        <PopularPlaceCard title={"Restaurant"} restaurant_name={"Restaurant NAme"} price={2.0} />
        <PopularPlaceCard title={"Restaurant"} restaurant_name={"Restaurant NAme"} price={2.0} />
        <PopularPlaceCard title={"Restaurant"} restaurant_name={"Restaurant NAme"} price={2.0} />
        <PopularPlaceCard title={"Restaurant"} restaurant_name={"Restaurant NAme"} price={2.0} />
        <PopularPlaceCard title={"Restaurant"} restaurant_name={"Restaurant NAme"} price={2.0} />
      </View>
      
    </TouchableOpacity>     
  )
}

export default DealPopularPlaces