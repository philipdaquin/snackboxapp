import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid'

const CartRow = () => {
  return (
    <View>
        <View className="mb-4 flex flex-row justify-between">
            
            <View className="flex flex-row space-x-3 items-center">
                <View className="bg-[#d9d9d9] h-[61px] w-[61px] rounded-lg ">
                    {/* Image */}
                </View>
                
                <View>
                    <Text className="font-medium text-lg text-left">Chicken Nuggets</Text>
                    <Text className="text-sm font-medium text-gray-500 text-left">$112.99</Text>
                </View>
            </View>

            <View className="flex flex-row space-x-4 items-center ">
                <TouchableOpacity >
                    <MinusCircleIcon size={45} color={ "#aeaeae" }/>
                </TouchableOpacity>
                <Text className="font-medium text-2xl">1</Text>
                <TouchableOpacity >
                    <PlusCircleIcon 
                    size={45} 
                    color={"#55DF8E"}/>
                </TouchableOpacity>            
            </View>
        </View>
    </View>
  )
}

export default CartRow