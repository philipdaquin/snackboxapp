import { View, Text } from 'react-native'
import React from 'react'

const DiscoverCard = ({title}) => {
  return (
    <View className="border-b border-gray-300/80 ">
      <Text className="text-left font-normal py-3 text-sm text-gray-400">{title}</Text>
    </View>
  )
}

export default DiscoverCard