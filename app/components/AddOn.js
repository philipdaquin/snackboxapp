import { View, Text } from 'react-native'
import React from 'react'

const AddOn = ({title, price}) => {
  return (
    <View>
        <View className="flex flex-row items-center mb-2 mt-1">
        <View className="w-[46px] h-[46px] bg-[#d9d9d9] rounded-md mr-4"/>
        <Text className="text-left font-medium text-base">{title}</Text>
        {/* Price */}
        <View className="absolute right-1 flex flex-row items-center space-x-3">
            <Text className="text-center font-normal">{`+ ${price}`}</Text>
            <View className="border-2 h-6 w-6 rounded-full border-gray-500"/>
        </View>
        </View>
        <View className="absolute right-0 bottom-1 w-[85%] h-7 border-b border-gray-300/80 "/>
    </View>
  )
}

export default AddOn