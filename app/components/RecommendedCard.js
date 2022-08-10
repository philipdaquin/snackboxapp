import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {UserIcon, HeartIcon} from 'react-native-heroicons/solid'


const RecommendedCard = () => {
  return (
    <TouchableOpacity className="w-[281px] h-[179px] bg-black/10  rounded-2xl mr-4">
      {/* Waiting time widget */}
      <View className="
        flex items-center 
        justify-center px-1
        w-[68px] h-[23px]
        bg-black rounded-lg
        absolute left-1 top-1 m-3
        ">
        <Text className="text-white font-medium text-xs">10 - 15 min</Text>
      </View>

      {/* Like Button */}
      <View className="
        flex items-center 
        justify-center 
        absolute right-1 top-1 m-3
        bg-white p-[6px] rounded-lg
        ">
          <HeartIcon size={22} color={"#c8c8c8"}/>
      </View>


      {/* Good for this many persons */}
      <View className="absolute bottom-3 space-y-2 left-4">
        <Text className="text-xl text-left font-bold relative bottom-1 text-white">CheeseBurger</Text>
        <View className="flex-row space-x-4">
          <View className="flex items-center justify-center 
            px-2 h-[23px] bg-[#c8c8c8] rounded-lg">
            <Text className="text-white font-medium text-sm flex items-center ">
              <UserIcon size={16} /> 1 Person</Text>
          </View>

          {/* Free Delivery */}
          <View className="flex items-center justify-center px-2 h-[23px] bg-[#c8c8c8] rounded-lg">
            <Text className="text-white font-medium text-sm">Free Delivery</Text>
          </View>

        </View>

      </View>
    </TouchableOpacity>
  )
}

export default RecommendedCard