import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import {PlusIcon} from 'react-native-heroicons/solid'


const HitsOfTheWeek = ({img}) => {
  return (
    <TouchableOpacity className="bg-[#d9d9d9] 
        w-[289px] h-[187px] 
        rounded-2xl mr-6
    ">
       <Image 
        source={{
          uri: img
        }}
      className=" w-[289px] h-[187px] rounded-2xl"/>
      <Text className="text-white absolute bottom-6 left-4 text-sm font-medium  ">
        Two slices of pizza with <br />delicious salami
      </Text>
      <TouchableOpacity className="absolute top-5 right-4 bg-black rounded-full h-[30px] w-[30px] items-center flex justify-center">
        <PlusIcon size={20} color={"white"}/>
      </TouchableOpacity>
      <View className="absolute bottom-6 right-4 py-1 px-4 bg-black rounded-xl items-center flex justify-center">
        <Text className="text-white font-medium">$12.99</Text>
      </View>
    </TouchableOpacity>
  )
}

export default HitsOfTheWeek