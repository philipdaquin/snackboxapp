import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {PlusCircleIcon} from 'react-native-heroicons/solid'


const HitsOfTheWeek = () => {
  return (
    <TouchableOpacity className="bg-[#d9d9d9] 
        w-[289px] h-[187px] 
        rounded-2xl mr-6
    ">
      <Text className="absolute bottom-6 left-4 text-sm font-medium">
        Two slices of pizza with <br />delicious salami
      </Text>
      <View className="absolute top-4 right-3">
        <PlusCircleIcon size={35} color={"black"}/>
      </View>
      <View className="absolute bottom-6 right-4 py-1 px-4 bg-black rounded-xl items-center flex justify-center">
        <Text className="text-white font-medium">$12.99</Text>
      </View>
    </TouchableOpacity>
  )
}

export default HitsOfTheWeek