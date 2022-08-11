import { View, Text } from 'react-native'
import React from 'react'
import SuggestedCard from './SuggestedCard'

const SuggestedResults = () => {
  return (
    <View>
        <Text className="font-bold text-xl text-left">Suggested</Text>
        <View className="border-b border-gray-300/80 mt-2 rounded"/>
        
        <View className="mt-4">
            <SuggestedCard title={"Chicken nuggets"} restaurant_name={"Pizza Hut"} price={4.99}/>
            <SuggestedCard title={"Chicken nuggets"} restaurant_name={"Pizza Hut"} price={4.99}/>
            <SuggestedCard title={"Chicken nuggets"} restaurant_name={"Pizza Hut"} price={4.99}/>
            <SuggestedCard title={"Chicken nuggets"} restaurant_name={"Pizza Hut"} price={4.99}/>
        </View>

        {/* Footer */}
        <View className="flex justify-center items-center mt-32 mb-10">
            <Text className="text-sm text-gray-400 font-medium">That's it!</Text>
        </View>
    </View>
  )
}

export default SuggestedResults