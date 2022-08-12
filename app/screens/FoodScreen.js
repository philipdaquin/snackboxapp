import { View, Text, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { StarIcon, MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid'
import BackButton from '../components/BackButton'
import LikeButton from '../components/LikeButton'



const FoodScreen = () => {
  return (
    <ScrollView className="bg-white min-h-screen">
      <View className="h-[412px] bg-[#d9d9d9]] px-4">
        {/* Backbutton */}
        <View className="mt-12">
          <BackButton />
        </View>
        {/* Like Button */}
        <View>
        </View>
      </View>
      <SafeAreaView className="px-4 mt-6">

{/* Headers */}
        <View className="flex flex-row items-center justify-between">
          <View className="flex flex-row items-start space-x2">
            <Text className="text-3xl font-medium text-left ">Chicken Nuggets</Text>

            <View className="
              flex items-center 
              justify-center relative
              h-[26px] m-3">
              <Text className="text-black font-bold text-[14px] items-center flex ">
                  5.0
                  <StarIcon size={18} color={"#ffc107"}/> 
                  <Text className="text-[8px] text-gray-500 font-medium">{`(100+)`}</Text>
              </Text>
            </View>
          </View>
          {/* See ALl Reviews  */}
          <Text className="text-sm font-medium ">See all reviews</Text>
        </View>
        
        <Text className="relative bottom-3 text-left text-xl font-medium text-[#575757]">
          From Mcdonald's
        </Text>

{/* Price */}
        <View className="flex flex-row justify-between mt-2">
          <View className="flex flex-row items-center space-x-4">
            <Text className="font-bold text-left text-4xl">$59.00</Text>
            <Text className="text-lg flex-bold text-gray-600 line-through ">$13.00</Text>
          </View>

          <View className="flex flex-row space-x-4 items-center">
            <TouchableOpacity>
              <MinusCircleIcon size={45} color={"#aeaeae"}/>
            </TouchableOpacity>

            <Text className="font-medium text-2xl">1</Text>
            
            <TouchableOpacity>
              <PlusCircleIcon size={45} color={"#aeaeae"}/>
            </TouchableOpacity>            
          </View>
        </View>

        <Text className="w-[323px] mt-2 text-gray-500 font-normal">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. A impedit unde iste dolorum fuga tempora amet, velit reiciendis temporibus esse odio doloribus ea pariatur non officia numquam, modi eum consectetur!
        </Text>
{/* Sizes */}
        <View className="mt-5 flex flex-row items-center justify-between">
          <Text className="font-medium text-xl text-left">Select Size</Text>
          
          <View className="flex flex-row space-x-3">
            <TouchableOpacity 
              className="bg-[#f3f3f3] h-[43px] w-[46px]  rounded-lg items-center flex justify-center ">
                <Text className="font-medium text-lg">S</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              className="bg-[#f3f3f3] h-[43px] w-[46px]  rounded-lg items-center flex justify-center ">
                <Text className="font-medium text-lg">M</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              className="bg-[#f3f3f3] h-[43px] w-[46px]  rounded-lg items-center flex justify-center ">
                <Text className="font-medium text-lg">L</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <Text>Frequently Bought Together</Text>
          
          <View>
            <View>
            <View>
              <View className="flex flex-row items-center mb-3 mt-3">
              <View className="w-[46px] h-[46px] bg-[#d9d9d9] rounded-md mr-4"/>
              <View className="">
                  <Text className="text-left font-medium text-base">{title}</Text>
                  <Text className="text-gray-500 font-medium text-xs">From {restaurant_name}</Text>
              </View>
              {/* Price */}
              <View className="absolute right-1 flex items-center justify-center w-[70px] h-[28px] rounded-lg bg-[#c8c8c8]">
                  <Text className="text-center font-bold">${price}</Text>
              </View>
              </View>
              <View className="absolute right-0 bottom-1 w-[85%] h-7 border-b border-gray-300/80 "/>
          </View>
            </View>
          </View>
        </View>

      </SafeAreaView>
    </ScrollView>
  )
}

export default FoodScreen