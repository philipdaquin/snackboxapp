import { View, Text } from 'react-native'
import React from 'react'
import MenuCard from './MenuCard'

const Menu = () => {
  return (
    <View>
      <View className="flex flex-row justify-between items-end">
        <Text className="font-medium text-2xl text-left">Recommended For You</Text>
        <Text className="text-sm text-red-500 font-medium">Show All</Text>
      </View>
      
      <View className="mt-2">
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />

      </View>
    </View>
  )
}

export default Menu