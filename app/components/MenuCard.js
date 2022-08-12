import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const MenuCard = () => {
  return (
    <View className="flex flex-row justify-between mb-6 items-end">
        <View className="space-y-1">
{/* Name of the item */}
            <Text className="font-medium text-lg text-left mb-3">Poke With Chicken</Text>
{/* Price */}
            <View className="flex flex-row space-x-2 items-center">
              <View className="px-2 py-1 rounded-lg bg-[#d9d9d9] flex flex-row justify-center ">
                <Text className="font-bold items-center text-sm">$46.99</Text>
              </View>
              {/* Free Delivery */}
              <View className="flex items-center justify-center px-2 h-[23px] bg-[#c8c8c8] rounded-lg">
                <Text className="text-white font-bold text-sm">Free Delivery</Text>
              </View>
            </View>
            <Text className="w-[323px] flex-shrink flex mt-2 text-gray-500 font-normal">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. A impedit unde iste dour non officia numquam, modi eum consectetur!
          </Text>
        </View>
        <View className="rounded-lg p-10 bg-[#d9d9d9]">
{/* <Image/>  */}
        </View>
    </View>
  )
}

export default MenuCard