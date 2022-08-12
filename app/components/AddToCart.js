import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {ShoppingBagIcon} from 'react-native-heroicons/outline'

const AddToCart = () => {
  return (
    <View 
        style={{
            shadowColor: "black",
            shadowOpacity: 90,
        }}
        className="bg-white w-full mt-32 h-28 shadow-t-3xl shadow-2xl px-4 absolute bottom-0 z-50">
        <TouchableOpacity 
            className="bg-black items-center rounded-2xl p-5 mt-4">
            <View className="items-center space-x-1 flex flex-row">
                <ShoppingBagIcon size={22} color={"white"}/>
                <Text className="text-white text-2xl font-bold ">
                    Add to Cart
                </Text>
            </View>
        </TouchableOpacity>
    </View>
  )
}

export default AddToCart