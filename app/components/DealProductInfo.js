import { View, Text } from 'react-native'
import React from 'react'

const DealProductInfo = ({title, restaurant_name, price}) => {
  return (
    <View className="px-5 mt-1">
      <View className="flex flex-row items-center mb-3 mt-2">
        <View className="w-[63px] h-[64px] bg-[#d9d9d9] rounded-md mr-4"/>
        <View className="mb-5">
          <Text className="text-left font-medium text-lg">{title}</Text>
          <Text className="text-gray-500 font-medium text-xs mt-1">From {restaurant_name}</Text>
        </View>
        {/* Price */}
        <View className="absolute right-1 flex items-center justify-center w-[70px] h-[28px] rounded-lg bg-[#c8c8c8]">
          <Text className="text-center font-bold">${price}</Text>
        </View>
      </View>
    </View>
  )
}

export default DealProductInfo